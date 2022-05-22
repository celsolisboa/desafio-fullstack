import { Repository, Any } from "typeorm";
import { AppDataSource } from "../../database";
import { Teacher } from "../../entities/Teacher";
import { ITeachersRepository } from "../ITeachersRepository";

export class PostgresTeachersRepository implements ITeachersRepository {
    teachersRepository: Repository<Teacher>;

    constructor() {
        this.teachersRepository = AppDataSource.getRepository(Teacher);
    }

    async list(): Promise<Teacher[]> {
        return await this.teachersRepository.find();
    }

    async findByIds(ids: string[]): Promise<Teacher[]> {
        return await this.teachersRepository.findBy({ id: Any(ids) });
    }
}