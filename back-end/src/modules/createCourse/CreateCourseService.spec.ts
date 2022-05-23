import { Classroom } from "../../entities/Classroom";
import { Course } from "../../entities/Course";
import { Teacher } from "../../entities/Teacher";
import { ICoursesRepository } from "../../repositories/ICoursesRepository";
import { ICreateCourseDTO } from "./CreateCourseDTO";
import { CreateCourseService } from "./CreateCourseService";

class CoursesRepositoryStub implements ICoursesRepository {
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
}

describe("Create course", () => {
    let sut: CreateCourseService;

    beforeAll(() => {
        sut = new CreateCourseService(new CoursesRepositoryStub());
    });

    it("should create a new course", async () => {
        const courseData = {
            name: "test course",
            start_time: "10:00:00",
            end_time: "12:00:00",
            teacher_ids: ["test_id"],
            classroom_ids: ["test_id"]
        }

        const course = await sut.execute(courseData);

        expect(course).toHaveProperty('id');
    });

    it("should not create a course without at least one teacher", async () => {
        const courseData = {
            name: "test course",
            start_time: "10:00:00",
            end_time: "12:00:00",
            teacher_ids: [],
            classroom_ids: ["test_id"]
        }

        await expect(sut.execute(courseData)).rejects.toEqual(new Error('A course must have at least one teacher'));
    });

    it("should not create a course without at least one classroom", async () => {
        const courseData = {
            name: "test course",
            start_time: "10:00:00",
            end_time: "12:00:00",
            teacher_ids: ["test_id"],
            classroom_ids: []
        }

        await expect(sut.execute(courseData)).rejects.toEqual(new Error('A course must have at least one classroom'));
    });
});