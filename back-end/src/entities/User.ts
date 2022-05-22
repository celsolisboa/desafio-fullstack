import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('users')
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        if (!this.id) {
            this.id = uuid();
        }
    }
}