import { prisma } from '../../data/postgres';
import { CreateGeneroDto, GeneroDatasource, GeneroEntity, UpdateGeneroDto } from '../../domain';




export class GeneroDatasourceImpl implements GeneroDatasource {

  async create( createGeneroDto: CreateGeneroDto ): Promise<GeneroEntity> {
    const genero = await prisma.generoModel.create({
      data: createGeneroDto!
    });

    return GeneroEntity.fromObject( genero );
  }

  async getAll(): Promise<GeneroEntity[]> {
    const generos = await prisma.generoModel.findMany();
    return generos.map( genero => GeneroEntity.fromObject(genero) );
  }

  async findById( id: number ): Promise<GeneroEntity> {
    const genero = await prisma.generoModel.findFirst({
      where: { id }
    });

    if ( !genero ) throw `genero with id ${ id } not found`;
    return GeneroEntity.fromObject(genero);
  }

  async updateById( updateGeneroDto: UpdateGeneroDto ): Promise<GeneroEntity> {
    await this.findById( updateGeneroDto.id );
    
    const updatedgenero = await prisma.generoModel.update({
      where: { id: updateGeneroDto.id },
      data: updateGeneroDto!.values
    });

    return GeneroEntity.fromObject(updatedgenero);
  }

  async deleteById( id: number ): Promise<GeneroEntity> {
    await this.findById( id );
    const deleted = await prisma.generoModel.delete({
      where: { id }
    });

    return GeneroEntity.fromObject( deleted );
  }

}