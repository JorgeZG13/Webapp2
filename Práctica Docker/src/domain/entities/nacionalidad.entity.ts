export class NacionalidadEntity {

    constructor(  
      public id: number,
      public nombrepais: string,
      public nombreciudad: string,
      public AutorId: number,
    ) {}
    
    public static fromObject( object: {[key: string]: any} ): NacionalidadEntity {
      const { id, nombrepais, nombreciudad, AutorId} = object;
      if ( !id ) throw 'Id is required';
      if ( !nombrepais ) throw 'Business email is required';
      if ( !nombreciudad ) throw 'Business name is required';
  
        return new NacionalidadEntity(id, nombrepais, nombreciudad, AutorId)
    }
  
  }