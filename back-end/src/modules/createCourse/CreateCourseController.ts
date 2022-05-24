import { Request, Response } from 'express';
import { CreateCourseService } from './CreateCourseService';
import { ICreateCourseDTO } from './CreateCourseDTO';

export class CreateCourseController {
    constructor(private createCourseService: CreateCourseService) {}

    async handle (request: Request, response: Response) : Promise<Response> {
        const data: ICreateCourseDTO = request.body;

        try {
            const course = await this.createCourseService.execute(data);

            return response.status(201).json(course);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}