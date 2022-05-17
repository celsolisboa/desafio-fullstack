import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Classroom from './Classroom';
import Teacher from './Teacher';

@Entity('courses')
class Course {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Teacher, (teacher) => teacher.course, {
      onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'teacher_id' })
    teacher: Teacher;

    @ManyToOne(() => Classroom, (classroom) => classroom.course, {
    onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'classroom_id' })
    classroom: Classroom;
}

export default Course;
