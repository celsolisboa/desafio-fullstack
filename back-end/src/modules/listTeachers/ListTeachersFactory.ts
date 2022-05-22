import { PostgresTeachersRepository } from "../../repositories/implementations/PostgresTeachersRepository";
import { ListTeachersService } from "./ListTeachersService";
import { ListTeachersController } from "./ListTeachersController";

const postgresTeachersRepository = new PostgresTeachersRepository();

const listTeachersService = new ListTeachersService(postgresTeachersRepository);

const listTeachersController = new ListTeachersController(listTeachersService);

export { ListTeachersService, listTeachersController };