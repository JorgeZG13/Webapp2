import { Router } from "express";
import { InventariosController } from "./controller";
import { InventarioDatasourceImpl } from '../../infraestructure/datasource/inventario.datasource.impl';
import { InventarioRepositoryImpl } from '../../infraestructure/repositories/inventario.repository.impl';

export class InventarioRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new InventarioDatasourceImpl();
        const inventarioRepository = new InventarioRepositoryImpl( datasource );
        const inventarioController = new InventariosController(inventarioRepository);

        router.get('/',inventarioController.getInventarios);
        router.get('/:id', inventarioController.getInventarioById);
        router.post('/', inventarioController.createInventario);
        router.put('/:id', inventarioController.updateInventario);
        router.delete('/:id', inventarioController.deleteInventario);
        return router;
    }
}