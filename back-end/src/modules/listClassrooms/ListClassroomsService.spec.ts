import { ListClassroomsService } from "./ListClassroomsService";
import { ClassroomsRepositoryStub } from "../../repositories/stub/ClassroomsRepositoryStub";
import { Classroom } from "../../entities/Classroom";

describe("List Classrooms", () => {
    let sut: ListClassroomsService;
    let expectedData: Array<Classroom>;

    beforeAll(() => {
        expectedData = new Array<Classroom>();

        for(let i = 1; i <= 3; i++) {
            expectedData.push(new Classroom({ number: i.toString() }));
        }
        sut = new ListClassroomsService(new ClassroomsRepositoryStub(expectedData));
    });

    it('should return a list of added classrooms', async () => {
        const classrooms = await sut.execute();

        expect(classrooms).toEqual(expectedData);
    })
})