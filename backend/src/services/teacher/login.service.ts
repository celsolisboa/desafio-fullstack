import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { TeacherRepository, TeacherTypes } from '../../repositories';
import config from '../../configs';

const loginTeacherService = async (data: Request) => {
  const { email, password } = data;
  const teacher: TeacherTypes = await new TeacherRepository().findTeacher({ email });

  if (!teacher) {
    return undefined;
  }

  if (teacher.password !== password) {
    return undefined;
  }
  const token: string = jwt.sign({ email }, config.secretKey, { expiresIn: config.expiresIn });

  return { token };
};

export default loginTeacherService;
