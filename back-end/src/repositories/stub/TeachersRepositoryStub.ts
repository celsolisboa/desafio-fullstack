import { ITeachersRepository } from "../../repositories/ITeachersRepository";
import { Teacher } from "../../entities/Teacher";

export class TeachersRepositoryStub implements ITeachersRepository {
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