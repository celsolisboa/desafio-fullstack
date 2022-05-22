import { Router } from "express";
import { usersRouter } from "./users.routes";
import { teachersRouter } from "./teachers.routes";
import { classroomsRouter } from "./classrooms.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/teachers', teachersRouter);
routes.use('/classrooms', classroomsRouter);

export { routes };