import { Request, Response } from 'express';
import { TeacherRepository, TeacherTypes } from '../../repositories';

const getTeachersController = async (req: Request, res: Response) => {
    const teachers: TeacherTypes[] = await new TeacherRepository().findAll();

    return res.status(200).json(teachers);
};

export default getTeachersController;
