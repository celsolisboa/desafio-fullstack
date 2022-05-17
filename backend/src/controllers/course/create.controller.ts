import { Request, Response } from 'express';
import { createCourseService } from '../../services';

// eslint-disable-next-line consistent-return
const createCourseController = async (req: Request, res: Response) => {
  try {
    const course = await createCourseService(req.body);

    return res.status(201).json(course);
  } catch (error) {
      console.log(error);
  }
};

export default createCourseController;
