import { Router } from 'express';
import {
  createCourseController,
  deleteCourseController,
  getClassroomController,
  getCourseController,
  getTeachersController,
  loginTeacherController,
  updateCourseController,
} from './controllers';
import { authTeacher } from './middlewares';

const router = Router();

router.post('/login', loginTeacherController);

router.get('/teachers', authTeacher, getTeachersController);

router.get('/classroom', authTeacher, getClassroomController);

router.get('/courses', authTeacher, getCourseController);

router.post('/courses', authTeacher, createCourseController);

router.put('/courses/:id', authTeacher, updateCourseController);

router.delete('/courses/:id', authTeacher, deleteCourseController);

export default router;
