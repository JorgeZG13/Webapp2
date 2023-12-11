export class CreateTraduccionIdiomaDto {
    private constructor (
        
        public readonly numerotraduccion: number,
        public readonly nombretraduccion: string,
        public readonly ididioma: number,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateTraduccionIdiomaDto?]{
        const { numerotraduccion, nombretraduccion, ididioma}= props;

        if ( !numerotraduccion) return ['Propiedad Numero de Traduccion requerida', undefined];
        if ( !nombretraduccion) return ['Propiedad Nombre de Traduccion requerida', undefined];
        if ( !ididioma) return ['Propiedad Idioma requerida', undefined];

        return [undefined, new CreateTraduccionIdiomaDto(numerotraduccion, nombretraduccion, ididioma)];
    }
}