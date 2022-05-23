import { IClassroomsRepository } from "../../repositories/IClassroomsRepository";
import { Classroom } from "../../entities/Classroom";

export class FindClassroomsByIdsService {
    constructor(private classroomsRepository: IClassroomsRepository) {}

    async execute (ids: string[]): Promise<Classroom[]> {
        const classrooms = await this.classroomsRepository.findByIds(ids);

        return classrooms;
    }
}