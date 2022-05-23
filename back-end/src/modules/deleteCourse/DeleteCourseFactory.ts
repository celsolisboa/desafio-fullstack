import { PostgresCoursesRepository } from "../../repositories/implementations/PostgresCoursesRepository";
import { DeleteCourseService } from "./DeleteCourseService";
import { DeleteCourseController } from "./DeleteCourseController";

const postgresCoursesRepository = new PostgresCoursesRepository();

const deleteCourseService = new DeleteCourseService(postgresCoursesRepository);

const deleteCourseController = new DeleteCourseController(deleteCourseService);

export { deleteCourseService, deleteCourseController};