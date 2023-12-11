import { CreateNacionalidadDto, UpdateNacionalidadDto } from '../dtos';
import { NacionalidadEntity } from '../entities/nacionalidad.entity';



export abstract class NacionalidadRepository {

  abstract create( createNacionalidadDto: CreateNacionalidadDto ): Promise<NacionalidadEntity>;

  abstract getAll(): Promise<NacionalidadEntity[]>;

  abstract findById( id: number ): Promise<NacionalidadEntity>;
  abstract updateById( updateNacionalidadDto: UpdateNacionalidadDto ): Promise<NacionalidadEntity>;
  abstract deleteById( id: number ): Promise<NacionalidadEntity>;

}