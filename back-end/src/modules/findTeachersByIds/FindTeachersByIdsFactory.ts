import { PostgresTeachersRepository } from "../../repositories/implementations/PostgresTeachersRepository";
import { FindTeachersByIdsService } from "./FindTeachersByIdsService";

const postgresTeachersRepository = new PostgresTeachersRepository();

const findTeachersByIdsService = new FindTeachersByIdsService(postgresTeachersRepository);

export { findTeachersByIdsService}