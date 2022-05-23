import { PostgresCoursesRepository } from "../../repositories/implementations/PostgresCoursesRepository";
import { ListCoursesService } from "../../modules/listCourses/ListCoursesService";
import { ListCoursesController } from "../../modules/listCourses/ListCoursesController";

const postgresCoursesRepository = new PostgresCoursesRepository();

const listCoursesService = new ListCoursesService(postgresCoursesRepository);

const listCoursesController = new ListCoursesController(listCoursesService);

export { listCoursesService, listCoursesController};