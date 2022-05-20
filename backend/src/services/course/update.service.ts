import { CourseRepository } from '../../repositories/course/course.epository';

const updateCourseService = async (data, id) => {
  try {
    const updatedCourse = await new CourseRepository().updateCourse(data, id);

    return updatedCourse;
  } catch (error) {
    return error;
  }
};

export default updateCourseService;
