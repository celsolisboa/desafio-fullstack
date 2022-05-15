/* eslint-disable no-unused-vars */
interface TeacherTypes {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    course: string;
}

interface TeacherRepoTypes {
    findAll: () => Promise<TeacherTypes[]>;
    findTeacher: (data: string) => Promise<TeacherTypes | undefined>
}

export {
    TeacherTypes,
    TeacherRepoTypes,
};
