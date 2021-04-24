export interface Course {
    id?: string;
    title: string;
    teachers: Array<string>;
    classes: Array<number>;
    time: Object
}