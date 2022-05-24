import { IClassroomsRepository } from "../../repositories/IClassroomsRepository";
import { Classroom } from "../../entities/Classroom";

export class ClassroomsRepositoryStub implements IClassroomsRepository {
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