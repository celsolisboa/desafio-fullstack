import { Controller, Get } from '@nestjs/common';
import { TeacherDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {

    constructor(private teacherService: TeacherService) { }

    @Get('/')
    findAll(): Promise<TeacherDto[]> {
        return this.teacherService.findAll();
    }

}
