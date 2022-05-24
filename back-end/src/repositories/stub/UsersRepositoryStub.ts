import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

export class UsersRepositoryStub implements IUsersRepository {
    expectedEmail: string;
    expectedPassword: string;

    constructor() {
        this.expectedEmail = 'test@test.com';
        this.expectedPassword = 'test_password';
    }

    async findByEmail(email: string) {
        if (email === this.expectedEmail) {
            return new User({
                email: this.expectedEmail,
                password: this.expectedPassword
            });
        } else {
            return null;
        }
    }
}