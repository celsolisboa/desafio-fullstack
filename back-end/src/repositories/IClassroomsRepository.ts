import { Classroom } from "../entities/Classroom";

export interface IClassroomsRepository{
    list(): Promise<Classroom[]>;
}