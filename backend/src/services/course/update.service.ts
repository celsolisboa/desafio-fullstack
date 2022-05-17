import { CourseRepository } from '../../repositories/course/course.epository';

const updateCourseService = async (data, id) => {


    console.log(data.teachers[0], id)

    const updatedCourse = await new CourseRepository().updateCourse(data.teachers[0], id);
    console.log(updatedCourse)
}

export default updateCourseService;
