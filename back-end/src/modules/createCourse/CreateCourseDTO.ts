export interface ICreateCourseDTO {
    name: string;
    start_time: string;
    end_time: string;
    teacher_ids: string[];
    classroom_ids: string[];
}