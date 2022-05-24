import { Teacher } from "./Teacher";
import { Classroom } from "./Classroom";

export interface Course {
    id: string;
    name: string;
    start_time: string;
    end_time: string;
    teachers: Teacher[];
    classrooms: Classroom[];
}
