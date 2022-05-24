import { ITeachersRepository } from "../../repositories/ITeachersRepository";
import { Teacher } from "../../entities/Teacher";

export class ListTeachersService {
    constructor(private teachersRepository: ITeachersRepository) {}

    async execute (): Promise<Teacher[]> {
        const teachers = await this.teachersRepository.list();

        return teachers;
    }
}