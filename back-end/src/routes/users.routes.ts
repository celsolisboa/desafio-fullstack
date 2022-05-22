import { Router, Request, Response } from 'express';
import { loginUserController } from "../modules/loginUser/LoginUserFactory";

const usersRouter = Router();

usersRouter.post('/login', (request, response) => {
    return loginUserController.handle(request, response);
});

export { usersRouter };