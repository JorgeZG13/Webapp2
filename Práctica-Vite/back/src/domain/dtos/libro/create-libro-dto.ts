export class CreateLibroDto {
    private constructor (
        public readonly ISBN: number,
        public readonly nombreLibro: string,
        public readonly anopublicacion: number,
        public readonly edicionLibro: string,
        public readonly clasificacionLibro: string,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateLibroDto?]{
        const { ISBN, nombreLibro, anopublicacion, edicionLibro, clasificacionLibro}= props;

        if (!ISBN ) return ['Propiedad Email requerida', undefined];
        if (!nombreLibro ) return ['Propiedad Nombre requerida', undefined];
        if (!anopublicacion ) return ['Propiedad Año de Publicacion requerida', undefined];
        if (!edicionLibro ) return ['Propiedad Edicion requerida', undefined];
        if (!clasificacionLibro ) return ['Propiedad Clasificacion requerida', undefined];

        return [undefined, new CreateLibroDto(ISBN, nombreLibro, anopublicacion, edicionLibro, clasificacionLibro)];
    }
}