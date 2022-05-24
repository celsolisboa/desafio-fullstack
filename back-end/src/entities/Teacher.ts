import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('teachers')
export class Teacher {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    constructor(props: Omit<Teacher, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!this.id) {
            this.id = uuid();
        }
    }
}