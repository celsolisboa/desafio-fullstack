import { ICoursesRepository } from "../../repositories/ICoursesRepository";
import { IEditCourseDTO } from "./EditCourseDTO";
import { findTeachersByIdsService } from "../findTeachersByIds/FindTeachersByIdsFactory";
import { findClassroomsByIdsService } from "../findClassroomsByIds/FindClassroomsByIdsFactory";
import { Course } from "../../entities/Course";

export class EditCourseService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute(id: string, data: IEditCourseDTO): Promise<Course> {
        const course = await this.coursesRepository.findById(id);

        if (!course) {
            throw new Error('Course does not exist!');
        }

        const teachers = await findTeachersByIdsService.execute(data.teacher_ids);

        if (!teachers || teachers.length === 0) {
            throw new Error('A course must have at least one teacher');
        }

        const classrooms = await findClassroomsByIdsService.execute(data.classroom_ids);

        if (!classrooms || classrooms.length === 0) {
            throw new Error('A course must have at least one classroom');
        }

        course.name = data.name;
        course.start_time = data.start_time;
        course.end_time = data.end_time;
        course.teachers = teachers;
        course.classrooms = classrooms;


        await this.coursesRepository.update(course);

        return course;
    }
}