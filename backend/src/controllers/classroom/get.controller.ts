import { Request, Response } from 'express';
import { ClassroomRepository } from '../../repositories/classroom/classroom.repository';
import { ClassroomTypes } from '../../repositories/classroom/interfaces';

const getClassroomController = async (req: Request, res: Response) => {
  const classrooms: ClassroomTypes[] = await new ClassroomRepository().findAll();

  return res.status(200).json(classrooms);
};

export default getClassroomController;
