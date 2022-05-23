import { Repository } from "typeorm";
import { AppDataSource } from "../../database";
import { Course } from "../../entities/Course";
import { ICoursesRepository } from "../ICoursesRepository";
import { ICreateCourseDTO } from "../../modules/createCourse/CreateCourseDTO";
import { PostgresClassroomsRepository } from "./PostgresClassroomsRepository";
import { PostgresTeachersRepository } from "./PostgresTeachersRepository";

export class PostgresCoursesRepository implements ICoursesRepository {
    coursesRepository: Repository<Course>;

    constructor() {
        this.coursesRepository = AppDataSource.getRepository(Course);
    }

    async save(data: ICreateCourseDTO): Promise<Course>{
        const { name, start_time, end_time, teacher_ids, classroom_ids } = data;

        const teachers = await new PostgresTeachersRepository().findByIds(teacher_ids);
        const classrooms = await new PostgresClassroomsRepository().findByIds(classroom_ids);

        const course = new Course({
            name,
            start_time,
            end_time,
            teachers,
            classrooms,
        });

        return await this.coursesRepository.save(course);
    }

    async list(): Promise<Course[]> {
        return await this.coursesRepository.find({
            relations: {
                teachers: true,
                classrooms: true
            }
        });
    }
}