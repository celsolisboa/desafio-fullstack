import { Request, Response } from 'express';
import { CourseRepository } from '../../repositories/course/course.epository';

const deleteCourseController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // eslint-disable-next-line no-unused-vars
    const deletedCourse = await new CourseRepository().deleteCourse(
      parseInt(id, 10),
    );

    return res.status(204).json();
  } catch (error) {
      return res.status(error.status).json({ error });
  }
};

export default deleteCourseController;
