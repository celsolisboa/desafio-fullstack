import { Router } from 'express';
import { getClassroomController, getTeachersController, loginTeacherController } from './controllers';
import { authTeacher } from './middlewares';

const router = Router();

router.post('/login', loginTeacherController);

router.get('/teachers', authTeacher, getTeachersController);

router.get('/classroom', authTeacher, getClassroomController);

export default router;
