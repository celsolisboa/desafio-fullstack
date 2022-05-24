import { CreateCourseService } from "./CreateCourseService";
import { CoursesRepositoryStub } from "../../repositories/stub/CoursesRepositoryStub";


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