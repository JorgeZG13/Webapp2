import { CreateGeneroDto, GeneroDatasource, GeneroEntity, GeneroRepository, UpdateGeneroDto } from '../../domain';


export class GeneroRepositoryImpl implements GeneroRepository {

  constructor(
    private readonly datasource: GeneroDatasource,
  ) { }


  create( createGeneroDto: CreateGeneroDto ): Promise<GeneroEntity> {
    return this.datasource.create( createGeneroDto );
  }

  getAll(): Promise<GeneroEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<GeneroEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateGeneroDto: UpdateGeneroDto ): Promise<GeneroEntity> {
    return this.datasource.updateById( updateGeneroDto );
  }

  deleteById( id: number ): Promise<GeneroEntity> {
    return this.datasource.deleteById( id );
  }

}