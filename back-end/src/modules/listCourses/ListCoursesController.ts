import { Request, Response } from 'express';
import { ListCoursesService } from './ListCoursesService';

export class ListCoursesController {
    constructor(private listCoursesService: ListCoursesService) {}

    async handle (request: Request, response: Response): Promise<Response> {
        try {
            const courses = await this.listCoursesService.execute();

            return response.status(200).json(courses);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}