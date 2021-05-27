import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassroomEntity } from './entity/classroom.entity';

@Injectable()
export class ClassroomService {

    constructor(@InjectRepository(ClassroomEntity) private classroomRepository: Repository<ClassroomEntity>) { }

    findAll(): Promise<ClassroomEntity[]> {
        return this.classroomRepository.find()
    }

}
