import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Teacher from './Teacher';

@Entity('courses')
class Course {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @OneToOne(() => Teacher, { nullable: true })
    @JoinColumn()
    teacher_id: Teacher;
}

export default Course;
