import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'
import CourseService from 'App/Services/CourseService'

export default class CourseController{
  constructor () {
    
  }

  public async index(){
    const courses = await CourseService.getAllCourses()
    return courses

  }
  
  public async create ({ request } : HttpContextContract){
    const params = request.all()
    
    const course = new Course()

    course.name = params.name
    course.class_room = params.classRoom
    course.beginning = params.beginning
    course.end = params.end
    course.teacher_id = params.teacher
    
    await CourseService.create(course)

    return {status: 204}
  }

  public async delete({ request } : HttpContextContract){
    const params = request.params()
    await CourseService.delete(params.id)

    return {status: 200, message: 'Seu curso foi excluído com sucesso.'}
  }
}