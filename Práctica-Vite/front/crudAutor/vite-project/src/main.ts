import './style.css'




(async ()=>{

  const response = await fetch('http://localhost:3000/api/autores')
  const data = await response.json()
  
  let divTable= `<table>`
  divTable += `<tr><th>Id</th><th>Cedula</th><th>Nombre</th><th>Correo</th><th>Acciones</th></tr>`
  data.forEach((autor: IAutor) => {
    divTable += `<tr><td>${autor.id}</td><td>${autor.cedulautor}</td><td>${autor.nombreautor}</td><td>${autor.correoautor}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button> </td> </tr>`
  })
  divTable += `</table>`

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable


  const divButton = `<button class="btn btn-primary" >Agregar</button>`
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary')
  btnAgregar?.addEventListener('click', ()=>{
    const divForm = `<form>
    <div class="mb-3">
      <label for="cedulautor" class="form-label">Cedula del autor</label>
      <input type="text" class="form-control" id="cedulautor" aria-describedby="cedulautor">
    </div>
    <div class="mb-3">
      <label for="nombreautor" class="form-label">Nombre del autor</label>
      <input type="text" class="form-control" id="nombreautor">
    </div>
    <div class="mb-3">
      <label for="correoautor" class="form-label">Correo del autor</label>
      <input type="text" class="form-control" id="correoautor" aria-describedby="correoautor">
    </div>
    <button type='submit'  class="btn btn-save">Save</button>
    <button type='submit'  class="btn btn-cancel">Cancel</button>
    </form>`
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
    btnSave?.addEventListener('click', async (e)=>{
      e.preventDefault()
      const cedulautor = document.querySelector<HTMLInputElement>('#cedulautor')!.value
      const nombreautor = document.querySelector<HTMLInputElement>('#nombreautor')!.value
      const correoautor = document.querySelector<HTMLInputElement>('#correoautor')!.value
      const response = await fetch('http://localhost:3000/api/autores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({cedulautor, nombreautor, correoautor})
      })
      const data = await response.json()
      console.log(data)
      // reload page
      location.reload()
    })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      console.log(id)
      await fetch(`http://localhost:3000/api/autores/${id}`, {
        method: 'DELETE'
      })
      location.reload()

     })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      const response = await fetch(`http://localhost:3000/api/autores/${id}`)
      const data = await response.json()
      //add button for cancel
      const btnCancel = `<button class="btn btn-cancel">Cancel</button>`
      const divForm = `<form>
      <div class="mb-3">
        <label for="cedulautor" class="form-label">Cedual del autor</label>
        <input type="text" class="form-control" id="cedulautor" aria-describedby="cedulautor" value="${data.cedulautor}">
      </div>
      <div class="mb-3">
        <label for="nombreautor" class="form-label">Nombre del autor</label>
        <input type="text" class="form-control" id="nombreautor" value="${data.nombreautor}">
      </div>
      <div class="mb-3">
        <label for="correoautor" class="form-label">Correo del autor</label>
        <input type="text" class="form-control" id="correoautor" value="${data.correoautor}">
      </div>
      <button type='submit'  class="btn btn-save">Save</button>
      ${btnCancel}
      </form>`
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
      btnSave?.addEventListener('click', async (e)=>{
        e.preventDefault()
        const cedulautor = document.querySelector<HTMLInputElement>('#cedulautor')!.value
        const nombreautor = document.querySelector<HTMLInputElement>('#nombreautor')!.value
        const correoautor = document.querySelector<HTMLInputElement>('#correoautor')!.value
        const response = await fetch(`http://localhost:3000/api/autores/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({cedulautor, nombreautor, correoautor})
        })
        const data = await response.json()
        console.log(data)
        // reload page
        location.reload()
      })
     })
  })

})()


