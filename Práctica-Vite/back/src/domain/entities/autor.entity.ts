import { GeneroEntity } from "./genero.entity";
import { NacionalidadEntity } from "./nacionalidad.entity";

export class AutorEntity {

    constructor(
        
      public id: number,
      public cedulautor: string,
      public nombreautor: string,
      public correoautor: number,
      public generos?: GeneroEntity[],
      public nacionalidad?: NacionalidadEntity[],
    ) {}
  
    get Generos() {
      return this.generos;
    }
    get Nacionalidad() {
        return this.nacionalidad;
      }
  
    public static fromObject( object: {[key: string]: any} ): AutorEntity {
      const { id, cedulautor, nombreautor, correoautor, generos, nacionalidad } = object;
      if ( !id ) throw 'Id is required';
      if ( !cedulautor ) throw 'cedulautor is required';
      if ( !nombreautor ) throw 'nombreautor is required';
      if ( !correoautor ) throw 'correoautor is required';

        return new AutorEntity(id, cedulautor, nombreautor, correoautor, generos, nacionalidad )
    }
  }