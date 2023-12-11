export class CreateIdiomaDto {
    private constructor (
        
        public readonly nombreidioma: string,
        public readonly origenId: number,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateIdiomaDto?]{
        const { nombreidioma, origenId}= props;

        if ( !nombreidioma) return ['Propiedad Nombre requerida', undefined];
        if ( !origenId) return ['Propiedad OrigenID requerida', undefined];

        return [undefined, new CreateIdiomaDto(nombreidioma, origenId)];
    }
}