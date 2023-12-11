import { CreateInventarioDto } from "../inventario/create-inventario.dto";

export class CreateEncargadoDto {
    private constructor (
        public readonly correoEncargado: string,
        public readonly nombreEncargado: string,
        public readonly telefonoEncargado: number,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateEncargadoDto?]{
        const { correoEncargado,nombreEncargado, telefonoEncargado}= props;

        if (!correoEncargado) return ['Propiedad Correo requerida', undefined];
        if (!nombreEncargado) return ['Propiedad Nombre requerida', undefined];
        if (!telefonoEncargado) return ['Propiedad Telefono requerida', undefined];

        return [undefined, new CreateEncargadoDto(correoEncargado, nombreEncargado, telefonoEncargado)];
    }
}