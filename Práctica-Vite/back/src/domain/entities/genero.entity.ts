export class GeneroEntity {

    constructor(
      public id: number,
      public generoliterario: string,
      public AutorId: number,
    ) {}
  

    public static fromObject( object: {[key: string]: any} ): GeneroEntity {
      const { id, generoliterario, AutorId } = object;
      if ( !id ) throw 'Id is required';
      if ( !generoliterario ) throw 'generoliterario is required';

        return new GeneroEntity(id, generoliterario, AutorId)
    }
  }