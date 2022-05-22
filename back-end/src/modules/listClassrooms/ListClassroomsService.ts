import { IClassroomsRepository } from "../../repositories/IClassroomsRepository";
import { Classroom } from "../../entities/Classroom";

export class ListClassroomsService {
    constructor(private classroomsRepository: IClassroomsRepository) {}

    async execute (): Promise<Classroom[]> {
        const classrooms = await this.classroomsRepository.list();

        return classrooms;
    }
}