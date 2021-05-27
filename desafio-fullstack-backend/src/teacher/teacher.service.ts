import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeacherEntity } from './entity/teacher.entity';

@Injectable()
export class TeacherService {

    constructor(@InjectRepository(TeacherEntity) private teacherRepository: Repository<TeacherEntity>) { }

    findAll(): Promise<TeacherEntity[]> {
        return this.teacherRepository.find()
    }

}
