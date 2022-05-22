import { Repository } from "typeorm";
import { AppDataSource } from "../../database";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {
    usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = AppDataSource.getRepository(User);
    }

    async findByEmail(email: string): Promise<User> {
        return await this.usersRepository.findOneBy({ email });
    }
}