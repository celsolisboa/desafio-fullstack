import { ListTeachersService } from "./ListTeachersService";
import { ITeachersRepository } from "../../repositories/ITeachersRepository";
import { Teacher } from "../../entities/Teacher";

class TeachersRepositoryStub implements ITeachersRepository {
    teachersList: Array<Teacher>;

    constructor(expectedData: Array<Teacher>) {
        this.teachersList = expectedData;
    }

    async list(): Promise<Teacher[]> {
        return this.teachersList;
    }

    async findByIds(ids: string[]): Promise<Teacher[]> {
        return new Array<Teacher>();
    }
}

describe("List Teachers", () => {
    let sut: ListTeachersService;
    let expectedData: Array<Teacher>;

    beforeAll(() => {
        expectedData = new Array<Teacher>();

        for(let i = 1; i <= 3; i++) {
            expectedData.push(new Teacher({ name: `test ${i}`}));
        }
        sut = new ListTeachersService(new TeachersRepositoryStub(expectedData));
    });

    it('should return a list of added teachers', async () => {
        const teachers = await sut.execute();

        expect(teachers).toEqual(expectedData);
    })
})