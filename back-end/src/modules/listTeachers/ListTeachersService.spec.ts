import { ListTeachersService } from "./ListTeachersService";
import { TeachersRepositoryStub } from "../../repositories/stub/TeachersRepositoryStub";
import { Teacher } from "../../entities/Teacher";

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