import { Repository, getRepository } from 'typeorm';
import Classroom from '../../entities/classroom';
import { ClassroomRepoTypes, ClassroomTypes } from './interfaces';

class ClassroomRepository implements ClassroomRepoTypes {
    private ormRepository: Repository<Classroom>;

    constructor() {
        this.ormRepository = getRepository(Classroom)
    }

    findAll = async () => await this.ormRepository.find();
}

export {
    ClassroomRepository,
    ClassroomTypes,
}
