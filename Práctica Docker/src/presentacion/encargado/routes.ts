import { Router } from "express";
import { EncargadosController } from "./controller";
import { EncargadoDatasourceImpl } from '../../infraestructure/datasource/encargado.datasource.impl';
import { EncargadoRepositoryImpl } from '../../infraestructure/repositories/encargado.repository.impl';

export class EncargadoRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new EncargadoDatasourceImpl();
        const encargadoRepository = new EncargadoRepositoryImpl( datasource );
        const encargadoController = new EncargadosController(encargadoRepository);

        router.get('/',encargadoController.getEncargados);
        router.get('/:id', encargadoController.getEncargadoById);
        router.post('/', encargadoController.createEncargado);
        router.put('/:id', encargadoController.updateEncargado);
        router.delete('/:id', encargadoController.deleteEncargado);
        return router;
    }
}