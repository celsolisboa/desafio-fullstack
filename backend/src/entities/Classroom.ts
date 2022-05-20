import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

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

    @Column()
    course: string;
}

export default Classroom;
