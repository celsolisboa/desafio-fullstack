import { Request, Response } from 'express'
import { CourseService } from '../services/CourseService'

class CourseController {
    async create(req: Request, res: Response): Promise<Response> {
        const { user_id, title, teachers, classes } = req.body

        const courseService = new CourseService()

        try {
            const course = await courseService.create({ user_id, title, teachers, classes })

            return res.json(course)
        } catch (err) {
            return res.status(400).json({
                message: err.message,
            })
        }
    }

    async findByUser(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        const courseService = new CourseService()

        const listCourses = await courseService.listByUser(id)

        return res.json(listCourses)
    }
}

export { CourseController }