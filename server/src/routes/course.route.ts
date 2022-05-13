import { Router } from "express";
import CourseController from "../controllers/course.controller";

const ROUTE_PREFIX = "/course";

const courseController = new CourseController();

export default function (): Router {
  const router: Router = Router();

  router.get(`/courses`, courseController.getCourses);

  router.get(`${ROUTE_PREFIX}/:id`, courseController.getCourse);

  router.post(`${ROUTE_PREFIX}/`, courseController.createCourse);

  router.put(`${ROUTE_PREFIX}/:id`, courseController.updateCourse);

  router.delete(`${ROUTE_PREFIX}/:id`, courseController.deleteCourse);

  return router;
}
