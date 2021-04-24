export interface Course {
    id?: string;
    user_id?: string,
    title: string;
    teachers: Array<string>;
    classes: Array<string>;
    start_time: string;
    end_time: string;
}