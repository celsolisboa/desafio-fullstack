import { ICoursesRepository } from "../../repositories/ICoursesRepository";

export class DeleteCourseService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute (id: string): Promise<void> {
        await this.coursesRepository.delete(id);
    }
}
