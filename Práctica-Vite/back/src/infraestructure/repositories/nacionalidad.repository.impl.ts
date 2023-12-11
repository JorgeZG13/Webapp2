import { CreateNacionalidadDto, NacionalidadDatasource, NacionalidadEntity, NacionalidadRepository, UpdateNacionalidadDto } from '../../domain';


export class NacionalidadRepositoryImpl implements NacionalidadRepository {

  constructor(
    private readonly datasource: NacionalidadDatasource,
  ) { }


  create( createNacionalidadDto: CreateNacionalidadDto ): Promise<NacionalidadEntity> {
    return this.datasource.create( createNacionalidadDto );
  }

  getAll(): Promise<NacionalidadEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<NacionalidadEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateNacionalidadDto: UpdateNacionalidadDto ): Promise<NacionalidadEntity> {
    return this.datasource.updateById( updateNacionalidadDto );
  }

  deleteById( id: number ): Promise<NacionalidadEntity> {
    return this.datasource.deleteById( id );
  }

}