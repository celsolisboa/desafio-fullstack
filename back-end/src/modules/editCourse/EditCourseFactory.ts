import { PostgresCoursesRepository } from "../../repositories/implementations/PostgresCoursesRepository";
import { EditCourseService } from "./EditCourseService";
import { EditCourseController } from "./EditCourseController";

const postgresCoursesRepository = new PostgresCoursesRepository();

const editCourseService = new EditCourseService(postgresCoursesRepository);

const editCourseController = new EditCourseController(editCourseService);

export { editCourseService, editCourseController };