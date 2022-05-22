import { Request, Response } from 'express';
import { ListClassroomsService } from './ListClassroomsService';

export class ListClassroomsController {
    constructor(private listClassroomsService: ListClassroomsService) {}

    async handle (request: Request, response: Response) : Promise<Response> {
        try {
            const classrooms = await this.listClassroomsService.execute();

            return response.status(200).json(classrooms);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}