import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import Swal from 'sweetalert2';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[]

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.loadData()
  }

  async loadData() {
    const courses: any = await this.courseService.getAll();
    this.courses = courses
  }

  async removeCourse(id) {
    try {
      await this.courseService.delete(id);
      await Swal.fire('Sucesso', `Curso removido com sucesso`, 'success');
      this.loadData();
    } catch (error) {
      Swal.fire('Erro', `Ocorreu um erro ao remover o curso`, 'error');
    }
  }

}
