import { PostgresClassroomsRepository } from "../../repositories/implementations/PostgresClassroomsRepository";
import { FindClassroomsByIdsService } from "./FindClassroomsByIdsService";

const postgresClassroomsRepository = new PostgresClassroomsRepository();

const findClassroomsByIdsService = new FindClassroomsByIdsService(postgresClassroomsRepository);

export { findClassroomsByIdsService}