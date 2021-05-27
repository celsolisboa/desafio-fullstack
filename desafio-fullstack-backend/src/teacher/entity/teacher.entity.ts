import { CourseEntity } from "src/course/entity/course.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('teacher')
export class TeacherEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @ManyToMany(() => CourseEntity, course => course.teachers)
    courses: CourseEntity[];

}
