// DDD
import { Request, Response } from 'express';
import { CreateEncargadoDto, UpdateEncargadoDto } from '../../domain/dtos';
import { EncargadoRepository } from '../../domain';


export class EncargadosController {

  //* DI
  constructor(
    private readonly encargadoRepository: EncargadoRepository,
  ) { }


  public getEncargados = async ( req: Request, res: Response ) => {
    const encargados = await this.encargadoRepository.getAll();
    return res.json( encargados );
  };

  public getEncargadoById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const encargado = await this.encargadoRepository.findById( id );
      res.json( encargado );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createEncargado = async ( req: Request, res: Response ) => {
    const [ error, createEncargadoDto ] = CreateEncargadoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const encargado = await this.encargadoRepository.create( createEncargadoDto! );
    res.json( encargado );

  };

  public updateEncargado = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateEncargadoDto ] = UpdateEncargadoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedEncargado = await this.encargadoRepository.updateById( updateEncargadoDto! );
    return res.json( updatedEncargado );

  };


  public deleteEncargado = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedEncargado = await this.encargadoRepository.deleteById( id );
    res.json( deletedEncargado );

  };



}