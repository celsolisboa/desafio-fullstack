import { LoginUserService } from "./LoginUserService";
import { UsersRepositoryStub } from "../../repositories/stub/UsersRepositoryStub";

describe('Login User', () => {
    let sut: LoginUserService;

    beforeAll(() => {
        sut = new LoginUserService(new UsersRepositoryStub());
    })

    it('should login when using correct email and password', async () => {
        const userData = {
            email: 'test@test.com',
            password: 'test_password'
        }

        const user = await sut.execute(userData);

        expect(user).toHaveProperty('id');
        expect(user.email).toBe(userData.email);
        expect(user.password).toBe(userData.password);
    });

    it('should not login when using an invalid email', async () => {
        const userData = {
            email: 'invalid@test.com',
            password: 'test_password'
        }

        await expect(sut.execute(userData)).rejects.toEqual(new Error('Incorrect login/password combination'));
    });

    it('should not login when using an invalid password', async () => {
        const userData = {
            email: 'test@test.com',
            password: 'invalid_password'
        }

        await expect(sut.execute(userData)).rejects.toEqual(new Error('Incorrect login/password combination'));
    });
});