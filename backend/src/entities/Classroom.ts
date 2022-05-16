import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
} from 'typeorm';
import Teacher from './Teacher';

@Entity('classroom')
class Classroom {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    room_number: number;

    @Column()
    start_time: string;

    @Column()
    end_time: string;

    @ManyToMany(() => Teacher, (teacher) => teacher.classroom)
    teacher: Teacher[];
}

export default Classroom;
