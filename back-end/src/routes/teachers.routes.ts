import { Router, Request, Response } from 'express';
import { listTeachersController } from "../modules/listTeachers/ListTeachersFactory";

const teachersRouter = Router();

teachersRouter.get('/', (request, response) => {
    return listTeachersController.handle(request, response);
});

export { teachersRouter };