import { PostgresCoursesRepository } from "../../repositories/implementations/PostgresCoursesRepository";
import { CreateCourseService } from "./CreateCourseService";
import { CreateCourseController } from "./CreateCourseController";

const postgresCoursesRepository = new PostgresCoursesRepository();

const createCourseService = new CreateCourseService(postgresCoursesRepository);

const createCourseController = new CreateCourseController(createCourseService);

export { createCourseService, createCourseController };