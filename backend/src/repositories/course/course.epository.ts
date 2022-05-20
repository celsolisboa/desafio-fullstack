import { Repository, getRepository } from 'typeorm';
import Course from '../../entities/Courses';
import { CourseRepoTypes, CourseTypes } from './interfaces';

class CourseRepository implements CourseRepoTypes {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  createCourse = async (data: any) => await this.ormRepository.save(data);

  findAllCourses = async () => await this.ormRepository.find({
    relations: ['teacher', 'classroom'],
  });

  updateCourse = async (data: any, id: number) => await this.ormRepository
    .createQueryBuilder()
    .update(Course)
    .set(data)
    .where({ id })
    .returning('*')
    .execute();

  deleteCourse = async (id: number) => await this.ormRepository.delete({ id });
}

export { CourseRepository, CourseTypes };