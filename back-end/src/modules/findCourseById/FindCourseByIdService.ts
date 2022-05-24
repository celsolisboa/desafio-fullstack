import { Course } from "../../entities/Course";
import { ICoursesRepository } from "../../repositories/ICoursesRepository";

export class FindCourseByIdService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute (id: string): Promise<Course> {
        const course = await this.coursesRepository.findById(id);

        if (!course) {
            throw new Error('Course does not exist!');
        }

        return course;
    }
}