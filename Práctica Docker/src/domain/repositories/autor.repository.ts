import { CreateAutorDto, UpdateAutorDto } from '../dtos';
import { AutorEntity } from '../entities/autor.entity';



export abstract class AutorRepository {

  abstract create( createAutorDto: CreateAutorDto ): Promise<AutorEntity>;

  abstract getAll(): Promise<AutorEntity[]>;

  abstract findById( id: number ): Promise<AutorEntity>;
  abstract updateById( updateAutorDto: UpdateAutorDto ): Promise<AutorEntity>;
  abstract deleteById( id: number ): Promise<AutorEntity>;

}