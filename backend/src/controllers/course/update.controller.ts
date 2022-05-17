import { Request, Response } from 'express';
import { updateCourseService } from '../../services';

const updateCourseController = (req: Request, res: Response) => {
    const { id } = req.params;

    // eslint-disable-next-line no-unused-vars
    const course = updateCourseService(req.body, parseInt(id, 10));

    return res.status(200).json();
};

export default updateCourseController;
