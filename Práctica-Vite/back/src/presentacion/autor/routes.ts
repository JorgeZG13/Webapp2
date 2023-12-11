import { Router } from "express";
import { AutorController } from "./controller";
import { AutorDatasourceImpl } from '../../infraestructure/datasource/autor.datasource.impl';
import { AutorRepositoryImpl } from '../../infraestructure/repositories/autor.repository.impl';
;

export class AutorRoutes {
    static get routes(): Router {

        const router = Router();

        const datasource = new AutorDatasourceImpl();
        const autorRepository = new AutorRepositoryImpl( datasource );
        const autorController = new AutorController(autorRepository);

        router.get('/',autorController.getAutor);
        router.get('/:id', autorController.getAutorById);
        router.post('/', autorController.createAutor);
        router.put('/:id', autorController.updateAutor);
        router.delete('/:id', autorController.deleteAutor);
        return router;
    }
}