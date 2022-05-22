import { Repository } from "typeorm";
import { AppDataSource } from "../../database";
import { Teacher } from "../../entities/Teacher";
import { ITeachersRepository } from "../ITeachersRepository";

export class PostgresTeachersRepository implements ITeachersRepository {
    TeachersRepository: Repository<Teacher>;

    constructor() {
        this.TeachersRepository = AppDataSource.getRepository(Teacher);
    }

    async list(): Promise<Teacher[]> {
        return await this.TeachersRepository.find();
    }
}