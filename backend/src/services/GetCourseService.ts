import { getRepository } from 'typeorm';

import Course from '../models/Course';

class GetCourseService {
  public async execute(): Promise<Course[]> {
    const coursesRepository = getRepository(Course);

    const course = await coursesRepository.find({
      select: ['id', 'name', 'teachers', 'rooms', 'initialHour', 'finalHour']
    });    

    return course;
  }
}

export default GetCourseService;
