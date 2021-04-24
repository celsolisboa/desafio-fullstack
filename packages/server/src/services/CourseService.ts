import { getCustomRepository, Repository } from "typeorm"
import { Course } from "../entities/Course"
import { User } from "../entities/User"
import { CoursesRepository } from "../repositories/CoursesRepository"
import { UsersRepository } from "../repositories/UsersRepository"

interface ICourseCreate {
    user_id: string;
    title: string;
    teachers: string;
    classes: string;
    start_time: string;
    end_time: string;
}

class CourseService {
    private usersRepository: Repository<User>
    private coursesRepository: Repository<Course>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
        this.coursesRepository = getCustomRepository(CoursesRepository)
    }

    async create({ user_id, title, teachers, classes, start_time, end_time}: ICourseCreate) { 
        const userExists = await this.usersRepository.findOne({ id: user_id })

        if(!userExists) throw new Error("User do not exists!")
        
        if(!Array.isArray(teachers)) throw new Error("Field teachers must be an array!")

        if(!Array.isArray(classes)) throw new Error("Field classes must be an array!")

        teachers = JSON.stringify(teachers)
        classes = JSON.stringify(classes)

        const courses = this.coursesRepository.create({
            user_id,
            title,
            teachers,
            classes,
            start_time,
            end_time
        })

        await this.coursesRepository.save(courses)

        return courses
    }

    async listByUser(user_id: string) { 
        const listCourses = await this.coursesRepository.find({user_id})

        return listCourses
    }
}

export { CourseService } 