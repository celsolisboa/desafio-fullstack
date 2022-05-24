import { Request, Response } from "express";
import { DeleteCourseService } from "./DeleteCourseService";

export class DeleteCourseController {
    constructor(private deleteCourseService: DeleteCourseService) {}

    async handle (request: Request, response: Response) {
        try {
            const { id } = request.params;

            await this.deleteCourseService.execute(id);

            return response.status(200).json({ message: `Course ${id} deleted!`});
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
