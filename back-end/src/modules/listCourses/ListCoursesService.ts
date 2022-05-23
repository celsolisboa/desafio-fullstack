import { ICoursesRepository } from "../../repositories/ICoursesRepository";
import { Course } from "../../entities/Course";

export class ListCoursesService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute (): Promise<Course[]>{
        const coursers = await this.coursesRepository.list();

        return coursers;
    }
}