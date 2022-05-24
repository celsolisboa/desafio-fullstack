import { Request, Response } from "express";
import { FindCourseByIdService } from "./FindCourseByIdService";

export class FindCourseByIdController {
    constructor(private findCourseByIdService: FindCourseByIdService) {}

    async handle (request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const course = await this.findCourseByIdService.execute(id);

            return response.status(200).json(course);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
