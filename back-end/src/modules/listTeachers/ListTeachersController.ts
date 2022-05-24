import { Request, Response } from 'express';
import { ListTeachersService } from './ListTeachersService';

export class ListTeachersController {
    constructor(private listTeachersService: ListTeachersService) {}

    async handle (request: Request, response: Response) : Promise<Response> {
        try {
            const teachers = await this.listTeachersService.execute();

            return response.status(200).json(teachers);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}