export class CreateInventarioDto {
    private constructor (
        public readonly numeroCopias: number,
        public readonly estado: string,
        public readonly precioVenta: number,
        public readonly precioAlquiler: number,
        public readonly encargadoId: number,
        public readonly negocioId: number,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateInventarioDto?]{
        const { numeroCopias,estado, precioVenta,precioAlquiler,encargadoId,negocioId}= props;

        if (!numeroCopias) return ['Propiedad Numero de Copias requerida', undefined];
        if (!estado) return ['Propiedad Estado requerida', undefined];
        if (!precioVenta) return ['Propiedad Precio de Venta requerida', undefined];
        if (!precioAlquiler) return ['Propiedad Precio de Alquiler requerida', undefined];
        if (!encargadoId) return ['Propiedad EncargadoID requerida', undefined];
        if (!negocioId) return ['Propiedad NegocioID requerida', undefined];

        return [undefined, new CreateInventarioDto(numeroCopias, estado, precioVenta,precioAlquiler,encargadoId,negocioId,)];
    }
}