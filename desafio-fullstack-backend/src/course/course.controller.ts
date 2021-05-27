import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseDto } from './dto/course.dto';

@Controller('course')
export class CourseController {

    constructor(private courseService: CourseService) { }

    @Post('/')
    async create(@Body() courseDto: CourseDto) {
        try {
            const result = await this.courseService.create(courseDto);

            console.log('result ', result);
        } catch (error) {
            console.log('error ', error);
        }

        return true;
    }

    @Put('/:id')
    async update(@Param('id') id, @Body() courseDto: CourseDto) {
        return this.courseService.update(id, courseDto);
    }

    @Get('/')
    findAll() {
        return this.courseService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id) {
        return this.courseService.findOne(id);
    }

    @Delete('/:id')
    delete(@Param('id') id) {
        return this.courseService.delete(id);
    }

}
