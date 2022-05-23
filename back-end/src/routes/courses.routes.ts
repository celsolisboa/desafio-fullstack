import { Router, Request, Response } from 'express';
import { createCourseController } from "../modules/createCourse/CreateCourseFactory";
import { listCoursesController } from "../modules/listCourses/ListCoursesFactory";
import { deleteCourseController } from "../modules/deleteCourse/DeleteCourseFactory";

const coursesRouter = Router();

coursesRouter.post('/', (request, response) => {
    return createCourseController.handle(request, response);
});

coursesRouter.get('/', (request, response) => {
    return listCoursesController.handle(request, response);
})

coursesRouter.delete('/:id', (request, response) => {
    return deleteCourseController.handle(request, response);
})

export { coursesRouter };