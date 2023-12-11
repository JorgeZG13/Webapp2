export class CreateCategoriaDto {
    private constructor (
        public readonly nombreCategoria: string,
        public readonly CategoriaPrincipal: string,
        public readonly librosId: number,
    ){}
    static create(props: {[key:string]: any}): [string?, CreateCategoriaDto?]{
        const { nombreCategoria, CategoriaPrincipal, librosId}= props;

        if (!nombreCategoria) return ['Propiedad Nombre requerida', undefined];
        if (!CategoriaPrincipal) return ['Propiedad Categoria Principal requerida', undefined];
        if (!librosId) return ['Propiedad LibrosID requerida', undefined];

        return [undefined, new CreateCategoriaDto(nombreCategoria, CategoriaPrincipal, librosId)];
    }
}