import { Repository, getRepository } from 'typeorm';
import Course from '../../entities/Courses';
import { CourseRepoTypes, CourseTypes } from './interfaces';

class CourseRepository implements CourseRepoTypes {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  createCourse = async (data: any) => await this.ormRepository.save(data);

  findAllCourses = async () => await this.ormRepository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.teachers', 'teachers')
      .leftJoinAndSelect('course.classrooms', 'classrooms')
      .addOrderBy('course.id')
      .getMany();

  updateCourse = async (data: any, id: number) => await this.ormRepository.update(data, { id });
}

export { CourseRepository, CourseTypes };
