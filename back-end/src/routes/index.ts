import { Router } from "express";
import { usersRouter } from "./users.routes";
import { teachersRouter } from "./teachers.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/teachers', teachersRouter);

export { routes };