import { getRepository } from 'typeorm';

import Course from '../models/Course';

interface Request {
  name: string;
  teachers: string[];
  rooms: string[];
  initialHour: string;
  finalHour: string;
}

class CreateCourseService {
  public async execute({ name, teachers, rooms, initialHour, finalHour }: Request): Promise<Course> {
    const coursesRepository = getRepository(Course);

    const checkCourseExists = await coursesRepository.findOne({
      where: { name },
    });

    if (checkCourseExists) {
      throw new Error('Curso já está cadastrado.');
    }

    const course = coursesRepository.create({
      name,
      teachers,
      rooms,
      initialHour,
      finalHour,
    });

    await coursesRepository.save(course);

    return course;
  }
}

export default CreateCourseService;
