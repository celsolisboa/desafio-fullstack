import { Request, Response } from 'express';
import { LoginUserService } from './LoginUserService';

export class LoginUserController {
    constructor(private loginUserService: LoginUserService) {}

    async handle (request: Request, response: Response) : Promise<Response> {
        const { email, password } = request.body;

        try {
            const user = await this.loginUserService.execute({ email, password });

            return response.status(200).json(user);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}