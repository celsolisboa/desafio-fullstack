import Courses from "App/Models/Course";

export default class CourseService {
    public static async create (name: string, class_room: string, beginning: string, end: string, teacher_id: string){
       const course = new Courses()

       course.name = name
       course.class_room = class_room
       course.beginning = beginning
       course.end = end
       course.teacher_id = teacher_id

       await course.save()
    }


    public static async getAllCourses(){
        return await Courses.all()
    }

    public static async delete(id: string){
        return await Courses.query().where('id', id).delete()
    
    }

}