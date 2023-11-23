import { UpdateInventarioDto } from "../inventario/update-inventario.dto";

export class UpdateNegocioDto {
    private constructor(
        public readonly id: number,
        public readonly correoNegocio?: string,
        public readonly nombreNegocio?: string,
        public readonly direccionNegocio?: string,
        public readonly telefonoNegocio?: number,
        public readonly totalLibros?: number,
        public readonly inventario?: UpdateInventarioDto[],   
    ) {}

    get values(){
        const returnObj: {[key:string]: any}= {};

        if (this.correoNegocio) returnObj.correoNegocio = this.correoNegocio;
        if (this.nombreNegocio) returnObj.nombreNegocio = this.nombreNegocio;
        if (this.direccionNegocio) returnObj.direccionNegocio = this.direccionNegocio;
        if (this.telefonoNegocio) returnObj.telefonoNegocio = this.telefonoNegocio;
        if (this.totalLibros) returnObj.totalLibros = this.totalLibros;
        if ( this.inventario ) returnObj.inventario = this.inventario;

        return returnObj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateNegocioDto?] {
        
        const {id, correoNegocio, nombreNegocio, direccionNegocio, telefonoNegocio, totalLibros, inventario} = props;
        let newCorreo = correoNegocio;

        if (!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }
        if (!correoNegocio && !nombreNegocio && !direccionNegocio && !telefonoNegocio && !telefonoNegocio && !totalLibros && !inventario){
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateNegocioDto(id, correoNegocio,nombreNegocio,direccionNegocio,telefonoNegocio,totalLibros, inventario)]
    }
}
