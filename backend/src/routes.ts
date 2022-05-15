import { Router } from 'express';
import { getTeachersController, loginTeacherController } from './controllers';
import { authTeacher } from './middlewares';

const router = Router();

router.post('/login', loginTeacherController);

router.get('/teachers', authTeacher, getTeachersController);

export default router;
