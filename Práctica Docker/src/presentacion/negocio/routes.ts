import { Router } from "express";
import { NegociosController } from "./controller";
import { NegocioDatasourceImpl } from '../../infraestructure/datasource/negocio.datasource.impl';
import { NegocioRepositoryImpl } from '../../infraestructure/repositories/negocio.repository.impl';

export class NegocioRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new NegocioDatasourceImpl();
        const negocioRepository = new NegocioRepositoryImpl( datasource );
        const negocioController = new NegociosController(negocioRepository);

        router.get('/',negocioController.getNegocios);
        router.get('/:id', negocioController.getNegocioById);
        router.post('/', negocioController.createNegocio);
        router.put('/:id', negocioController.updateNegocio);
        router.delete('/:id', negocioController.deleteNegocio);
        return router;
    }
}