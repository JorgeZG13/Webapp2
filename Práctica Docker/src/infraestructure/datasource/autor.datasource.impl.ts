import { prisma } from '../../data/postgres';
import { CreateAutorDto, AutorDatasource, AutorEntity, UpdateAutorDto } from '../../domain';

export class AutorDatasourceImpl implements AutorDatasource {

  async create( createAutorDto: CreateAutorDto ): Promise<AutorEntity> {
    const { genero, nacionalidad, ...rest } = createAutorDto
    
    const autor = await prisma.autorModel.create({
      data: rest
    });

    return AutorEntity.fromObject( autor );
  }

  async getAll(): Promise<AutorEntity[]> {
    const autores = await prisma.autorModel.findMany();
    return autores.map( autor => AutorEntity.fromObject(autor) );
  }

  async findById( id: number ): Promise<AutorEntity> {
    const autor = await prisma.autorModel.findFirst({
      where: { id }
    });

    if ( !autor ) throw `autor with id ${ id } not found`;
    return AutorEntity.fromObject(autor);
  }

  async updateById( updateAutorDto: UpdateAutorDto ): Promise<AutorEntity> {
    await this.findById( updateAutorDto.id );
    
    const updatedautor = await prisma.autorModel.update({
      where: { id: updateAutorDto.id },
      data: updateAutorDto!.values
    });

    return AutorEntity.fromObject(updatedautor);
  }

  async deleteById( id: number ): Promise<AutorEntity> {
    await this.findById( id );
    const deleted = await prisma.autorModel.delete({
      where: { id }
    });

    return AutorEntity.fromObject( deleted );
  }

}