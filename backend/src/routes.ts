import { Router } from 'express';
import { getTeachersController, loginTeacherController } from './controllers';

const router = Router();

router.get('/teachers', getTeachersController);

router.post('/login', loginTeacherController);

export default router;
