import { Router, Request, Response } from 'express';
import { createCourseController } from "../modules/createCourse/CreateCourseFactory";
import { listCoursesController } from "../modules/listCourses/ListCoursesFactory";

const coursesRouter = Router();

coursesRouter.post('/', (request, response) => {
    return createCourseController.handle(request, response);
});

coursesRouter.get('/', (request, response) => {
    return listCoursesController.handle(request, response);
})

export { coursesRouter };