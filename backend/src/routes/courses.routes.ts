import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateCourseService from '../services/CreateCourseService';
import GetCourseService from '../services/GetCourseService';

import ensureAuthenticated from '../middleware/ensureAthenticated';

const coursesRouter = Router();

coursesRouter.use(ensureAuthenticated)

coursesRouter.get('/', async (request, response) => {
  const getCourse = new GetCourseService();
  const courses = await getCourse.execute();

  return response.json(courses);
});

coursesRouter.post('/', async (request, response) => {
  try {
    const {name, teachers, rooms, initialHour, finalHour} = request.body;

    const createCourse = new CreateCourseService();

    const course = await createCourse.execute({
      name, 
      teachers, 
      rooms, 
      initialHour, 
      finalHour,
    });
    
    return response.json(course);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default coursesRouter;
