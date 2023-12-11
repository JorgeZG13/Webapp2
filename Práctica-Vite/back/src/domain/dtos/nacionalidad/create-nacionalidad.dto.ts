export class CreateNacionalidadDto {
    private constructor (
        public readonly nombrepais: string,
        public readonly nombreciudad: string,
        public readonly AutorId: number,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateNacionalidadDto?]{
        const { nombrepais, nombreciudad, AutorId }= props;

        if (!nombrepais) return ['Propiedad Nombre del Pais requerida', undefined];
        if (!nombreciudad) return ['Propiedad Nombre de la Ciudad requerida', undefined];
        if (!AutorId) return ['Propiedad AutorID requerida', undefined];

        return [undefined, new CreateNacionalidadDto (nombrepais, nombreciudad, AutorId)];
    }
}