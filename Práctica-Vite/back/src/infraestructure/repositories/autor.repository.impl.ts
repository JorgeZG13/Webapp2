import { CreateAutorDto, AutorDatasource, AutorEntity, AutorRepository, UpdateAutorDto } from '../../domain';


export class AutorRepositoryImpl implements AutorRepository {

  constructor(
    private readonly datasource: AutorDatasource,
  ) { }


  create( createAutorDto: CreateAutorDto ): Promise<AutorEntity> {
    return this.datasource.create( createAutorDto );
  }

  getAll(): Promise<AutorEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<AutorEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateAutorDto: UpdateAutorDto ): Promise<AutorEntity> {
    return this.datasource.updateById( updateAutorDto );
  }

  deleteById( id: number ): Promise<AutorEntity> {
    return this.datasource.deleteById( id );
  }

}