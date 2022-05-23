import { Course } from "../entities/Course";
import { ICreateCourseDTO } from "../modules/createCourse/CreateCourseDTO";

export interface ICoursesRepository{
    save(data: ICreateCourseDTO): Promise<Course>;
    list(): Promise<Course[]>;
}