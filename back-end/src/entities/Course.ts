import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { Classroom } from "./Classroom";
import { Teacher } from "./Teacher";
import { v4 as uuid } from "uuid";

@Entity('courses')
export class Course {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    start_time: string

    @Column()
    end_time: string

    @ManyToMany(() => Teacher)
    @JoinTable({
        name: 'courses_teachers',
        joinColumn: {
            name: "course_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "teacher_id",
            referencedColumnName: "id"
        }
    })
    teachers: Teacher[]

    @ManyToMany(() => Classroom)
    @JoinTable({
        name: 'courses_classrooms',
        joinColumn: {
            name: "course_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "classroom_id",
            referencedColumnName: "id"
        }
    })
    classrooms: Classroom[]

    constructor(props: Omit<Course, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!this.id) {
            this.id = uuid();
        }
    }
}