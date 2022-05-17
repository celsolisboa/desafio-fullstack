import { Router } from 'express';
import {
  createCourseController,
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

export default router;
