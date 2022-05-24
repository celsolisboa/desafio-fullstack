import { Classroom } from "../entities/Classroom";

export interface IClassroomsRepository{
    list(): Promise<Classroom[]>;
    findByIds(ids: string[]): Promise<Classroom[]>;
}