import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../controller/models/course.model';
import { CourseService } from '../controller/services/course.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css'],
})
export class CoursesDetailsComponent implements OnInit {
  teachers = new FormControl();
  rooms = new FormControl();

  teacherList: string[] = [
    'Wesley Yann',
    'Gyovanna Caroline',
    'Gracinha Azevedo',
    'Yuri Lourenço',
    'Aecio Neves',
  ];
  roomList: string[] = ['101', '102', '104', '203', '201', '200', '303', '300'];

  course: Course = {
    id: '',
    name: '',
    teacher: [],
    room: [],
    time: { start: '', end: '' },
  };

  currentUrl: string = this.location.path();

  constructor(
    private router: Router,
    private location: Location,
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {
    if (localStorage.getItem('loggedin') !== 'true') {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    if (!this.currentUrl.includes('new')) {
      const courseId: string = this.route.snapshot.paramMap.get('id') || '';
      this.getCurrentCourse(courseId);
    }
  }

  handleSave() {
    this.course.teacher = this.teachers.value;
    this.course.room = this.rooms.value;

    if (this.currentUrl.includes('new')) {
      this.courseService.create(this.course).subscribe({
        next: (data) => {
          this.router.navigate(['/courses']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.courseService.update(this.course).subscribe({
        next: (data) => {
          this.router.navigate(['/courses']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  async getCurrentCourse(id: string) {
    await this.courseService.getById(id).subscribe({
      next: (data: any) => {
        this.course = data.response;
        this.teachers.setValue(this.course.teacher);
        this.rooms.setValue(this.course.room);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handleCancel() {
    this.router.navigate(['/courses']);
  }
}