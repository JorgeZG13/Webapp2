// DDD
import { Request, Response } from 'express';
import { CreateInventarioDto, UpdateInventarioDto } from '../../domain/dtos';
import { InventarioRepository } from '../../domain';


export class InventariosController {

  //* DI
  constructor(
    private readonly inventarioRepository: InventarioRepository,
  ) { }


  public getInventarios = async ( req: Request, res: Response ) => {
    const inventario = await this.inventarioRepository.getAll();
    return res.json( inventario );
  };

  public getInventarioById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const inventario = await this.inventarioRepository.findById( id );
      res.json( inventario );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createInventario = async ( req: Request, res: Response ) => {
    const [ error, createInventarioDto ] = CreateInventarioDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const inventario = await this.inventarioRepository.create( createInventarioDto! );
    res.json( inventario );

  };

  public updateInventario = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateInventarioDto ] = UpdateInventarioDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedInventario = await this.inventarioRepository.updateById( updateInventarioDto! );
    return res.json( updatedInventario );

  };


  public deleteInventario = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedInventario = await this.inventarioRepository.deleteById( id );
    res.json( deletedInventario );

  };



}