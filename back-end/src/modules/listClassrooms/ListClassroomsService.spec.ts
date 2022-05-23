import { ListClassroomsService } from "./ListClassroomsService";
import { IClassroomsRepository } from "../../repositories/IClassroomsRepository";
import { Classroom } from "../../entities/Classroom";

class ClassroomsRepositoryStub implements IClassroomsRepository {
    classroomsList: Array<Classroom>;

    constructor(expectedData: Array<Classroom>) {
        this.classroomsList = expectedData;
    }

    async list(): Promise<Classroom[]> {
        return this.classroomsList;
    }

    async findByIds(ids: string[]): Promise<Classroom[]> {
        return new Array<Classroom>();
    }
}

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