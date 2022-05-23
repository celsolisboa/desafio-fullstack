import { Course } from "../entities/Course";
import { ICreateCourseDTO } from "../modules/createCourse/CreateCourseDTO";

export interface ICoursesRepository{
    save(data: ICreateCourseDTO): Promise<Course>;
    list(): Promise<Course[]>;
    findById(id: string): Promise<Course>;
    update(course: Course): Promise<void>;
    delete(id: string): Promise<void>;
}