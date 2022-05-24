import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Teacher } from '../interfaces/Teacher';
import { Classroom } from '../interfaces/Classroom';
import { apiBaseUrl } from 'src/environments/environment';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
    courseForm: FormGroup;
    breakpoint: number;
    teachers: Teacher[];
    classrooms: Classroom[];

    constructor(private httpClient: HttpClient, private router: Router) {
        this.breakpoint = 1;
        this.teachers = [];
        this.classrooms = [];

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

    create() {
        if (this.courseForm.valid) {
            this.httpClient.post(`${apiBaseUrl}/courses`, this.courseForm.value).subscribe({
                next: () => { this.router.navigateByUrl('courses') },
                error: (result) => { alert(result.error.message) }
            })
        }
    }
}
