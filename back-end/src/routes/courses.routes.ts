import { Router, Request, Response } from "express";
import { createCourseController } from "../modules/createCourse/CreateCourseFactory";
import { listCoursesController } from "../modules/listCourses/ListCoursesFactory";
import { findCourseByIdController } from "../modules/findCourseById/FindCourseByIdFactory";
import { editCourseController } from "../modules/editCourse/EditCourseFactory";
import { deleteCourseController } from "../modules/deleteCourse/DeleteCourseFactory";

const coursesRouter = Router();

coursesRouter.post('/', (request, response) => {
    return createCourseController.handle(request, response);
});

coursesRouter.get('/', (request, response) => {
    return listCoursesController.handle(request, response);
})

coursesRouter.get('/:id', (request, response) => {
    return findCourseByIdController.handle(request, response);
})

coursesRouter.put('/:id', (request, response) => {
    return editCourseController.handle(request, response);
})

coursesRouter.delete('/:id', (request, response) => {
    return deleteCourseController.handle(request, response);
})

export { coursesRouter };