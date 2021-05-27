import { Controller, Get } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { ClassroomDto } from './dto/classroom.dto';

@Controller('classroom')
export class ClassroomController {

    constructor(private classroomService: ClassroomService) { }

    @Get('/')
    findAll(): Promise<ClassroomDto[]> {
        return this.classroomService.findAll();
    }

}
