import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '../models/teacher.model';
import { ClassroomService } from '../services/classroom.service';
import { TeacherService } from '../services/teacher.service';

import Swal from 'sweetalert2';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Classroom } from '../models/classroom.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  teachers: Teacher[];
  classrooms: Classroom[]

  formGroup: FormGroup;

  loading: boolean = false;

  id = null;

  constructor(private teacherService: TeacherService, private classroomService: ClassroomService,
    private fb: FormBuilder, private courseService: CourseService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngOnInit() {
    this.createFormGroup()
    this.loadData()
  }

  createFormGroup() {
    this.formGroup = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      teachers: [[], Validators.required],
      classrooms: [[], Validators.required]
    })
  }

  async loadData() {

    if (this.id) {
      const course = await this.courseService.getById(this.id);
      this.formGroup.setValue(course)
    }

    this.teachers = await this.teacherService.getAll();
    this.classrooms = await this.classroomService.getAll();

  }

  async save() {
    try {
      if (!this.formGroup.valid) {
        return Swal.fire('Erro', 'É necessário preencher todos os campos para continuar.', 'error');
      }

      this.loading = true;

      const object = {
        name: this.formGroup.get('name').value,
        startTime: this.formGroup.get('startTime').value,
        endTime: this.formGroup.get('endTime').value,
        teachers: this.formGroup.get('teachers').value.map((x) => { return { id: x.id } }),
        classrooms: this.formGroup.get('classrooms').value.map((x) => { return { id: x.id } })
      }

      this.id ? await this.courseService.update(this.id, object) : await this.courseService.save(object);

      await Swal.fire('Sucesso', `Curso ${this.id ? 'alterado' : 'cadastrado'} com sucesso`, 'success');

      this.loading = false;
      this.router.navigate(['/course'])
    } catch (error) {
      Swal.fire('Erro', `Ocorreu um erro ao tentar salvar o curso`, 'error');
    } finally {
      this.loading = false;
    }

  }



}
