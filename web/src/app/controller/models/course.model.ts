export interface Course {
    id: string;
    room: string[];
    name: string;
    teacher: string[];
    time: { start: string; end: string };
}