import { ClassroomEntity } from "src/classroom/entity/classroom.entity";
import { TeacherEntity } from "src/teacher/entity/teacher.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('course')
export class CourseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, unique: true })
    name: string;

    @Column({ nullable: false })
    startTime: string;

    @Column({ nullable: false })
    endTime: string;

    @ManyToMany(() => TeacherEntity, teacher => teacher.courses, { cascade: true })
    @JoinTable({
        name: 'course_teacher',
        joinColumn: { name: 'courseId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'teacherId', referencedColumnName: 'id' },
    })
    teachers: TeacherEntity[];

    @ManyToMany(() => ClassroomEntity, classroom => classroom.courses, { cascade: true })
    @JoinTable({
        name: 'course_classroom',
        joinColumn: { name: 'courseId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'classroomId', referencedColumnName: 'id' },
    })
    classrooms: ClassroomEntity[];

}
