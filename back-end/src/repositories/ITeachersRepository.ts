import { Teacher } from "../entities/Teacher";

export interface ITeachersRepository{
    list(): Promise<Teacher[]>;
    findByIds(ids: string[]): Promise<Teacher[]>;
}