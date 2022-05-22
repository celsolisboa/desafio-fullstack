import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { LoginUserService } from "./LoginUserService";
import { LoginUserController } from "./LoginUserController";

const postgresUsersRepository = new PostgresUsersRepository();

const loginUserService = new LoginUserService(postgresUsersRepository);

const loginUserController = new LoginUserController(loginUserService);

export { loginUserService, loginUserController };