import { prisma } from '../../data/postgres';
import { CreateNacionalidadDto, NacionalidadDatasource, NacionalidadEntity, UpdateNacionalidadDto } from '../../domain';




export class NacionalidadDatasourceImpl implements NacionalidadDatasource {

  async create( createNacionalidadDto: CreateNacionalidadDto ): Promise<NacionalidadEntity> {
    const nacionalidad = await prisma.nacionalidadModel.create({
      data: createNacionalidadDto!
    });

    return NacionalidadEntity.fromObject( nacionalidad );
  }

  async getAll(): Promise<NacionalidadEntity[]> {
    const nacionalidades = await prisma.nacionalidadModel.findMany();
    return nacionalidades.map( nacionalidad => NacionalidadEntity.fromObject(nacionalidad) );
  }

  async findById( id: number ): Promise<NacionalidadEntity> {
    const nacionalidad = await prisma.nacionalidadModel.findFirst({
      where: { id }
    });

    if ( !nacionalidad ) throw `nacionalidad with id ${ id } not found`;
    return NacionalidadEntity.fromObject(nacionalidad);
  }

  async updateById( updateNacionalidadDto: UpdateNacionalidadDto ): Promise<NacionalidadEntity> {
    await this.findById( updateNacionalidadDto.id );
    
    const updatednacionalidad = await prisma.nacionalidadModel.update({
      where: { id: updateNacionalidadDto.id },
      data: updateNacionalidadDto!.values
    });

    return NacionalidadEntity.fromObject(updatednacionalidad);
  }

  async deleteById( id: number ): Promise<NacionalidadEntity> {
    await this.findById( id );
    const deleted = await prisma.nacionalidadModel.delete({
      where: { id }
    });

    return NacionalidadEntity.fromObject( deleted );
  }

}