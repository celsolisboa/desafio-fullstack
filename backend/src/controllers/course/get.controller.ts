import { Request, Response } from 'express';
import { CourseRepository } from '../../repositories/course/course.epository';
import { CourseTypes } from '../../repositories/course/interfaces';

const getCourseController = async (req: Request, res: Response) => {
    const courses: CourseTypes[] = await new CourseRepository().findAllCourses();

    return res.status(200).json(courses);
};

export default getCourseController;
