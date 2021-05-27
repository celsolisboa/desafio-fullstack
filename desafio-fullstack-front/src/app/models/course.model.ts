import { Classroom } from "./classroom.model";
import { Teacher } from "./teacher.model";

export interface Course {

    id: number;
    name: string;
    startTime: string;
    endTime: string;
    teachers: Teacher[];
    classrooms: Classroom[];
    
}