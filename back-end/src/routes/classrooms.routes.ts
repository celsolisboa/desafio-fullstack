import { Router, Request, Response } from 'express';
import { listClassroomsController } from "../modules/listClassrooms/ListClassroomsFactory";

const classroomsRouter = Router();

classroomsRouter.get('/', (request, response) => {
    return listClassroomsController.handle(request, response);
});

export { classroomsRouter };