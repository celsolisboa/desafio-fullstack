import { Injectable } from "@angular/core";
import { Course } from "../models/course.model";
import { HttpService } from "./http.service";

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    constructor(private httpService: HttpService) { }
    
    create(course: Course) {
        return this.httpService.post('/course', course)
    }
    getAll() {
        return this.httpService.get('/courses')
    }
    getById(id: string) {
        return this.httpService.get(`/course/${id}`)
    }
    update(course: Course) {
        return this.httpService.put(`/course/${course.id}`, course)
    }
    remove(id: string) {
        return this.httpService.remove(`/course/${id}`)
    }
}