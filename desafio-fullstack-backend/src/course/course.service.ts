import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseDto } from './dto/course.dto';
import { CourseEntity } from './entity/course.entity';

@Injectable()
export class CourseService {

    constructor(@InjectRepository(CourseEntity) private courseRepository: Repository<CourseEntity>) { }

    findAll(): Promise<CourseEntity[]> {
        return this.courseRepository.find({ relations: ['classrooms', 'teachers'] })
    }

    findOne(id): Promise<CourseEntity> {
        return this.courseRepository.findOne(id, { relations: ['classrooms', 'teachers'] });
    }

    update(id, courseDto: CourseDto) {
        return this.courseRepository.save({ id: parseInt(id), ...courseDto }, { reload: true })
    }

    create(courseDto: CourseDto) {
        return this.courseRepository.save({ ...courseDto });
    }

    delete(id: number) {
        return this.courseRepository.delete(id);
    }
}
