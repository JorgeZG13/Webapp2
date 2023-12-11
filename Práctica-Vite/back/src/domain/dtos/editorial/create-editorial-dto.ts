export class CreateEditorialDto {
    private constructor (
        public readonly nombreEditorial: string,
        public readonly correoEditorial: string,
        public readonly direccionEditorial: string,
        public readonly telefonoEditorial: number,
        public readonly libroId: number,
    ){}
    static create(props: {[key:string]: any}): [string?, CreateEditorialDto?]{
        const { nombreEditorial, correoEditorial, direccionEditorial, telefonoEditorial, libroId}= props;

        if (!nombreEditorial) return ['Propiedad Nombre Requerida ', undefined];
        if (!correoEditorial) return ['Propiedad Correo Requerida ', undefined];
        if (!direccionEditorial) return ['Propiedad Direccion Requerida ', undefined];
        if (!telefonoEditorial) return ['Propiedad Telefono Requerida ', undefined];
        if (!libroId) return ['Propiedad LibroID Requerida ', undefined];

        return [undefined, new CreateEditorialDto(nombreEditorial, correoEditorial, direccionEditorial, telefonoEditorial, libroId)];
    }
}