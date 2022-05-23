import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../controller/models/course.model';
import { CourseService } from '../controller/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private router: Router, private courseService: CourseService) {
    if (localStorage.getItem('loggedin') !== 'true') {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.updateCoruses();
  }

  async updateCoruses(): Promise<void> {
    const coursesCurrent = await this.courseService.getAll().subscribe({
      next: (data: any) => {
        this.courses = data.response;
      },
      error: (error) => console.log(error),
    });
  }

  composeString(array: string[]): string {
    let arrayNames: string = '';
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (array.length === 1) arrayNames = element;
      else if (i === array.length - 1) arrayNames += `e ${element}`;
      else if (i === array.length - 2) arrayNames += `${element} `;
      else arrayNames += `${element}, `;
    }
    return arrayNames;
  }

  async handleDeleteCard(id: string): Promise<void> {
    await this.courseService.remove(id).subscribe({
      next: () => {
        this.updateCoruses();
      },
      error: (error) => console.log(error),
    });
  }

  handleEditCard(id: string): void {
    this.router.navigate(['/courses/' + id]);
  }
}