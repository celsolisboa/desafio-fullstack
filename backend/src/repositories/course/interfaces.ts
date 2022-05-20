/* eslint-disable no-unused-vars */
import Course from '../../entities/Courses';

interface CourseTypes {
    id: number;
    name: string;
    // teacher_id: number;
    // classroom_id: number;
    }

interface CourseRepoTypes {
    findAllCourses: () => Promise<CourseTypes[]>
    createCourse: (data: Course) => Promise<Course>;
    updateCourse: (data: any, id: number) => Promise<Object>;
    deleteCourse: (id: number) => void;
}

export {
    CourseTypes,
    CourseRepoTypes,
};
