import { Repository, getRepository } from 'typeorm';
import Teacher from '../../entities/Teacher';
import { TeacherRepoTypes, TeacherTypes } from './interfaces';

class TeacherRepository implements TeacherRepoTypes {
  private ormRepository: Repository<Teacher>;

  constructor() {
    this.ormRepository = getRepository(Teacher);
  }

  findAll = async () => await this.ormRepository.find();

  findTeacher = async (data: string) => await this.ormRepository.findOne({ email: data });
}

export { TeacherRepository, TeacherTypes };
