import { CreateInventarioDto } from "../inventario/create-inventario.dto";

export class CreateNegocioDto {
    private constructor (
        public readonly correoNegocio: string,
        public readonly nombreNegocio: string,
        public readonly direccionNegocio: string,
        public readonly telefonoNegocio: number,
        public readonly totalLibros: number,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateNegocioDto?]{
        const { correoNegocio,nombreNegocio, direccionNegocio, telefonoNegocio, totalLibros}= props;

        if (!correoNegocio ) return ['Propiedad Email requerida', undefined];
        if (!nombreNegocio ) return ['Propiedad Nombre requerida', undefined];
        if (!direccionNegocio ) return ['Propiedad Direccion requerida', undefined];
        if (!telefonoNegocio ) return ['Propiedad Telefono requerida', undefined];
        if (!totalLibros ) return ['Propiedad totalLibros requerida', undefined];

        return [undefined, new CreateNegocioDto(correoNegocio, nombreNegocio, direccionNegocio, telefonoNegocio,totalLibros)];
    }
}