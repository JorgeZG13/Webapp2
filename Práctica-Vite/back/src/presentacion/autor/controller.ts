// DDD
import { Request, Response } from 'express';
import { CreateAutorDto, UpdateAutorDto } from '../../domain/dtos';
import { AutorRepository } from '../../domain';


export class AutorController {

  //* DI
  constructor(
    private readonly autorRepository: AutorRepository,
  ) { }


  public getAutor = async ( req: Request, res: Response ) => {
    const autor = await this.autorRepository.getAll();
    return res.json( autor );
  };

  public getAutorById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const autor = await this.autorRepository.findById( id );
      res.json( autor );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createAutor = async ( req: Request, res: Response ) => {
    const [ error, createAutorDto ] = CreateAutorDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const autor = await this.autorRepository.create( createAutorDto! );
    res.json( autor );

  };

  public updateAutor = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateAutorDto ] = UpdateAutorDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedAutor = await this.autorRepository.updateById( updateAutorDto! );
    return res.json( updatedAutor);

  };


  public deleteAutor = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedAutor = await this.autorRepository.deleteById( id );
    res.json( deletedAutor );

  };
}