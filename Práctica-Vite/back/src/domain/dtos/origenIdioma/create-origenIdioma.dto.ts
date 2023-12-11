export class CreateorigenIdiomaDto {
    private constructor (
        public readonly nombrepais: string,
        public readonly idiomaoficial: string,
        
    ){}

    static create(props: {[key:string]: any}): [string?, CreateorigenIdiomaDto?]{
        const { nombrepais, idiomaoficial}= props;

        if (!nombrepais) return ['Propiedades Nombre del Pais requerida', undefined];
        if (!idiomaoficial) return ['Propiedades Idioma Oficial requerida', undefined];

        return [undefined, new CreateorigenIdiomaDto(nombrepais, idiomaoficial)];
    }
}