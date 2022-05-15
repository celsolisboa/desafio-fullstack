import { Request } from 'express';
import { TeacherRepository, TeacherTypes } from '../../repositories';

const loginTeacherService = async (data: Request) => {
  const { email, password } = data;
  const teacher: TeacherTypes = await new TeacherRepository().findTeacher(email);

  if (!teacher) {
    return undefined;
  }

  if (teacher.password !== password) {
    return undefined;
  }

  const token: string = '4b1b5d92-4a7e-4d23-a25b-b63b83e192d7';

  return { token };
};

export default loginTeacherService;
