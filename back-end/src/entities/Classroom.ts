import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('classrooms')
export class Classroom {
    @PrimaryColumn()
    id: string;

    @Column()
    number: string;

    constructor(props: Omit<Classroom, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!this.id) {
            this.id = uuid();
        }
    }
}