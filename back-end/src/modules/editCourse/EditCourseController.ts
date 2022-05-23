import { Request, Response } from "express";
import { EditCourseService } from "./EditCourseService";
import { IEditCourseDTO } from "./EditCourseDTO";

export class EditCourseController {
    constructor(private editCourseService: EditCourseService) {}

    async handle (request: Request, response: Response) {
        const { id } = request.params;
        const data: IEditCourseDTO = request.body;

        try {
            const course = await this.editCourseService.execute(id, data);

            return response.status(200).json(course);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
