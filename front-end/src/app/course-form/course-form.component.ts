import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Course } from '../interfaces/Course';
import { Teacher } from '../interfaces/Teacher';
import { Classroom } from '../interfaces/Classroom';
import { apiBaseUrl } from 'src/environments/environment';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
    course: Course;
    courseForm: FormGroup;
    breakpoint: number;
    teachers: Teacher[];
    classrooms: Classroom[];

    constructor(private httpClient: HttpClient, private router: Router, private location: Location, private route: ActivatedRoute) {
        this.breakpoint = 1;
        this.teachers = [];
        this.classrooms = [];
        this.course = {} as Course;

        this.courseForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            start_time: new FormControl('', [
                Validators.required,
                Validators.pattern('^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$')
            ]),
            end_time: new FormControl('', [
                Validators.required,
                Validators.pattern('^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$')
            ]),
            teacher_ids: new FormControl('', Validators.required),
            classroom_ids: new FormControl('', Validators.required),
        })
    }

    ngOnInit(): void {
        this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;

        if (!this.location.path().includes('create')) {
            console.log("edit");
            const courseId: string = this.route.snapshot.paramMap.get('id') || '';
            console.log('edit');
            this.httpClient.get<Course>(`${apiBaseUrl}/courses/${courseId}`).subscribe({
                next: (result) => {
                    this.course = result
                    this.course.start_time = this.course.start_time.slice(0, 5)
                    this.course.end_time = this.course.end_time.slice(0, 5)
                },
                error: (result) => { alert(result.error.message) }
            })
        }

        this.httpClient.get<Teacher[]>(`${apiBaseUrl}/teachers`).subscribe({
            next: (result) => { this.teachers = result },
            error: (result) => { alert(result.error.message) }
        })

        this.httpClient.get<Classroom[]>(`${apiBaseUrl}/classrooms`).subscribe({
            next: (result) => { this.classrooms = result },
            error: (result) => { alert(result.error.message) }
        })
    }

    onResize(event: Event) {
        this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
    }

    return() {
        history.back();
    }

    save() {
        if (this.courseForm.valid) {
            if (this.course.id){
                this.httpClient.put(`${apiBaseUrl}/courses/${this.course.id}`, this.courseForm.value).subscribe({
                    next: () => { this.router.navigateByUrl('courses') },
                    error: (result) => { alert(result.error.message) }
                })
            } else {
                this.httpClient.post(`${apiBaseUrl}/courses`, this.courseForm.value).subscribe({
                    next: () => { this.router.navigateByUrl('courses') },
                    error: (result) => { alert(result.error.message) }
                })
            }
        }
    }
}
