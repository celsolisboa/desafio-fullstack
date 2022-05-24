import { PostgresClassroomsRepository } from "../../repositories/implementations/PostgresClassroomsRepository";
import { ListClassroomsService } from "./ListClassroomsService";
import { ListClassroomsController } from "./ListClassroomsController";

const postgresClassroomsRepository = new PostgresClassroomsRepository();

const listClassroomsService = new ListClassroomsService(postgresClassroomsRepository);

const listClassroomsController = new ListClassroomsController(listClassroomsService);

export { listClassroomsService, listClassroomsController };