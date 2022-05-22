import { Router } from "express";
import { usersRouter } from "./users.routes";
import { teachersRouter } from "./teachers.routes";
import { classroomsRouter } from "./classrooms.routes";
import { coursesRouter } from "./courses.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/teachers', teachersRouter);
routes.use('/classrooms', classroomsRouter);
routes.use('/courses', coursesRouter);

export { routes };