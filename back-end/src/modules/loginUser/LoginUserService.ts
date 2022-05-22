import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../entities/User";
import { ILoginUserRequestDTO } from "./LoginUserDTO";

export class LoginUserService {
    constructor(private usersRepository: IUsersRepository) {}

    async execute (data: ILoginUserRequestDTO): Promise<User> {
        const user = await this.usersRepository.findByEmail(data.email);

        if (!user) {
            throw new Error('Incorrect login/password combination');
        }

        if(data.password != user.password) {
            throw new Error('Incorrect login/password combination');
        }

        return user;
    }
}