import { CreateAutorDto, UpdateAutorDto } from '../dtos';
import { AutorEntity } from '../entities/autor.entity';



export abstract class AutorDatasource {

  abstract create( createEncargadoDto: CreateAutorDto ): Promise<AutorEntity>;

  abstract getAll(): Promise<AutorEntity[]>;

  abstract findById( id: number ): Promise<AutorEntity>;
  abstract updateById( updateEncargadoDto: UpdateAutorDto ): Promise<AutorEntity>;
  abstract deleteById( id: number ): Promise<AutorEntity>;

}