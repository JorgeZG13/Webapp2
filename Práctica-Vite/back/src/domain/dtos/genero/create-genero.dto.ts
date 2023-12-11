export class CreateGeneroDto {
    private constructor (
        public readonly generoliterario: string,
        public readonly AutorId: number,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateGeneroDto?]{
        const {generoliterario, AutorId}= props;

        if (!generoliterario) return ['Propiedad Genero del autor requerida', undefined];
        if (!AutorId) return ['Propiedad AutorID requerida', undefined];

        return [undefined, new CreateGeneroDto(generoliterario, AutorId)];
    }
}