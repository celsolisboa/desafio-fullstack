import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
} from 'typeorm';
import Classroom from './Classroom';

@Entity('teachers')
class Teacher {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @ManyToMany(() => Classroom, (classroom) => classroom.teacher)
    classroom: Classroom[];
}

export default Teacher;
