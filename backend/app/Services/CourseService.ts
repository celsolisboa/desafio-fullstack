import Courses from "App/Models/Course";

type CoursesType = {
    name: string, 
    class_room: string, 
    beginning: string, 
    end: string, 
    teacher_id: string
}

export default class CourseService {
    public static async create (course: CoursesType){
       const newCourse = new Courses()

       newCourse.name = course.name
       newCourse.class_room = course.class_room
       newCourse.beginning = course.beginning
       newCourse.end = course.end
       newCourse.teacher_id = course.teacher_id

       await newCourse.save()
    }


    public static async getAllCourses(){
        return await Courses.all()
    }

    public static async delete(id: string){
        return await Courses.query().where('id', id).delete()
    
    }

}