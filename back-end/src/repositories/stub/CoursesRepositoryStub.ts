import { ICoursesRepository } from "../../repositories/ICoursesRepository";
import { ICreateCourseDTO } from "../../modules/createCourse/CreateCourseDTO";
import { Classroom } from "../../entities/Classroom";
import { Course } from "../../entities/Course";
import { Teacher } from "../../entities/Teacher";

export class CoursesRepositoryStub implements ICoursesRepository {
    teachers: Array<Teacher>;
    classrooms: Array<Classroom>;

    constructor() {
        this.teachers = new Array<Teacher>();
        this.classrooms = new Array<Classroom>();

        this.teachers.push(new Teacher({ name: 'test name'}));
        this.classrooms.push(new Classroom({ number: '101'}));
    }

    async save (data: ICreateCourseDTO): Promise<Course> {
        return new Course({...data, teachers: this.teachers, classrooms: this.classrooms});
    }

    async list(): Promise<Course[]> {
        return new Array<Course>();
    }

    async findById(id: string): Promise<Course> {
        let course: Course;

        return course;
    }

    async update(course: Course): Promise<void> {}

    async delete(id: string): Promise<void> {}
}