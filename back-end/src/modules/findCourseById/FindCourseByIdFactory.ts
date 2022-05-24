import { PostgresCoursesRepository } from "../../repositories/implementations/PostgresCoursesRepository";
import { FindCourseByIdService } from "../../modules/findCourseById/FindCourseByIdService";
import { FindCourseByIdController } from "../../modules/findCourseById/FindCourseByIdController";

const postgresCoursesRepository = new PostgresCoursesRepository();

const findCourseByIdService = new FindCourseByIdService(postgresCoursesRepository);

const findCourseByIdController = new FindCourseByIdController(findCourseByIdService);

export { findCourseByIdService, findCourseByIdController };
