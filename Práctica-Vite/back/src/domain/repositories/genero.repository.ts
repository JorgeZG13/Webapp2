import { CreateGeneroDto, UpdateGeneroDto } from '../dtos';
import { GeneroEntity } from '../entities/genero.entity';



export abstract class GeneroRepository {

  abstract create( createGeneroDto: CreateGeneroDto ): Promise<GeneroEntity>;

  abstract getAll(): Promise<GeneroEntity[]>;

  abstract findById( id: number ): Promise<GeneroEntity>;
  abstract updateById( updateGeneroDto: UpdateGeneroDto ): Promise<GeneroEntity>;
  abstract deleteById( id: number ): Promise<GeneroEntity>;

}