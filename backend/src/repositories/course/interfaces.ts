/* eslint-disable no-unused-vars */
import Course from '../../entities/Courses';

interface CourseTypes {
    id: number;
    name: string;
    }

interface CourseRepoTypes {
    findAllCourses: () => Promise<CourseTypes[]>
    createCourse: (data: Course) => Promise<Course>;
    updateCourse: (data: any, id: number) => Promise<Object>; 
}

export {
    CourseTypes,
    CourseRepoTypes,
};
