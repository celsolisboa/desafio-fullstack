import { Request, Response } from 'express'
import { CourseService } from '../services/CourseService'

class CourseController {
    async create(req: Request, res: Response): Promise<Response> {
        const { user_id, title, teachers, classes, start_time, end_time } = req.body

        const courseService = new CourseService()

        try {
            const course = await courseService.create(
                { user_id, title, teachers, classes, start_time, end_time }
            )

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

    async putCourse(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const { user_id, title, teachers, classes, start_time, end_time } = req.body
        
        const courseService = new CourseService()

        try{
            const updatedCourse = await courseService.updateCourse({ id, user_id, title, teachers, classes, start_time, end_time })
        
            return res.json(updatedCourse)
        } catch (err) {
            return res.status(400).json({
                message: err.message,
            })
        }
    }

    async deleteCourseById (req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        const courseService = new CourseService()

        try {
            const deletedCourses = await courseService.deleteCourse(id)

            return res.json(deletedCourses)
        } catch (err) {
            return res.status(400).json({
                message: err.message,
            })
        }
        
    }
}

export { CourseController }