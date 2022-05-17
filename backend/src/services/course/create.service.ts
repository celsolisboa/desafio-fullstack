import Course from '../../entities/Courses';
import { CourseRepository } from '../../repositories/course/course.epository';

const createCourseService = async (data: string) => {

    const course: Course = await new CourseRepository().createCourse(data);

    return course;

}

export default createCourseService;
