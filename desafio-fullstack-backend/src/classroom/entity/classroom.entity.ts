import { CourseEntity } from "src/course/entity/course.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('classroom')
export class ClassroomEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @ManyToMany(() => CourseEntity, course => course.classrooms)
    courses: CourseEntity[];

}
