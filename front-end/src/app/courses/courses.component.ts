import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Course } from '../interfaces/Course';
import { Teacher } from '../interfaces/Teacher';
import { Classroom } from '../interfaces/Classroom';
import { apiBaseUrl } from 'src/environments/environment';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
    breakpoint: number;
    courses: Course[];

    constructor(private httpClient: HttpClient, private router: Router) {
        this.courses = [];
        this.breakpoint = 1;
    }

    ngOnInit(): void {
        this.httpClient.get<Course[]>(`${apiBaseUrl}/courses`).subscribe({
            next: (result) => { this.courses = result },
            error: (result) => { alert(result.error.message) }
        })

        if (window.innerWidth >= 1400){
            this.breakpoint = 3;
        } else {
            this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
        }
    }

    onResize(event: Event) {
        if (window.innerWidth >= 1400){
            this.breakpoint = 3;
        } else {
            this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
        }
    }

    deleteCourse(courseId: string) {
        this.httpClient.delete(`${apiBaseUrl}/courses/${courseId}`).subscribe({
            next: () => { window.location.reload() },
            error: (result) => { alert(result.error.message) }
        });
    }

    getTeachersString(teachers: Teacher[]) {
        let resultString = '';

        for(let i = 0; i < teachers.length; i++) {
            resultString += 'Prof ' + teachers[i].name;

            if (i != teachers.length - 1)
                resultString += ' e ';
        };

        return resultString;
    }

    getClassroomsString(classrooms: Classroom[]) {
        let resultString = 'Sala ';

        for(let i = 0; i < classrooms.length; i++) {
            resultString += + classrooms[i].number;

            if (i != classrooms.length - 1)
                resultString += ' e ';
        };

        return resultString;
    }

    addNewCourse() {
        this.router.navigateByUrl('courses/form/create');
    }

    editCourse(courseId: string) {
        this.router.navigateByUrl('courses/form/' + courseId);
    }
}
