// DDD
import { Request, Response } from 'express';
import { CreateNegocioDto, UpdateNegocioDto } from '../../domain/dtos';
import { NegocioRepository } from '../../domain';


export class NegociosController {

  //* DI
  constructor(
    private readonly negocioRepository: NegocioRepository,
  ) { }


  public getNegocios = async ( req: Request, res: Response ) => {
    const negocios = await this.negocioRepository.getAll();
    return res.json( negocios );
  };

  public getNegocioById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const negocio = await this.negocioRepository.findById( id );
      res.json( negocio );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createNegocio = async ( req: Request, res: Response ) => {
    const [ error, createNegocioDto ] = CreateNegocioDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const negocio = await this.negocioRepository.create( createNegocioDto! );
    res.json( negocio );

  };

  public updateNegocio = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateNegocioDto ] = UpdateNegocioDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedNegocio = await this.negocioRepository.updateById( updateNegocioDto! );
    return res.json( updatedNegocio );

  };


  public deleteNegocio = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedNegocio = await this.negocioRepository.deleteById( id );
    res.json( deletedNegocio );

  };



}