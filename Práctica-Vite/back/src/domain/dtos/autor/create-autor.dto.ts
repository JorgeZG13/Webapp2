import { CreateGeneroDto } from "../genero/create-genero.dto";
import { CreateNacionalidadDto } from "../nacionalidad/create-nacionalidad.dto";

export class CreateAutorDto {
    private constructor (
        public readonly cedulautor: string,
        public readonly nombreautor: string,
        public readonly correoautor: string,
        public readonly genero?: CreateGeneroDto[],
        public readonly nacionalidad?: CreateNacionalidadDto[],
    ){}

    static create(props: {[key:string]: any}): [string?, CreateAutorDto?]{
        const { cedulautor, nombreautor, correoautor, generos, nacionalidad}= props;

        if (!cedulautor) return ['Propiedad Cedula, nombre y correo del autor requerida', undefined];
        if (!cedulautor) return ['Propiedad Nombre del autor requerida', undefined];
        if (!correoautor) return ['Propiedad Correo del autor requerida', undefined];

        return [undefined, new CreateAutorDto(cedulautor, nombreautor, correoautor, generos, nacionalidad)];
    }
}