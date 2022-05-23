import { ITeachersRepository } from "../../repositories/ITeachersRepository";
import { Teacher } from "../../entities/Teacher";

export class FindTeachersByIdsService {
    constructor(private teachersRepository: ITeachersRepository) {}

    async execute (ids: string[]): Promise<Teacher[]> {
        const teachers = await this.teachersRepository.findByIds(ids);

        return teachers;
    }
}