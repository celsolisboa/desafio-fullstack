import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoService } from '../../curso.service';
import { Curso } from 'src/app/_model/curso.model';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CadastroCursoComponent implements OnInit {
  coursesForm = new FormGroup({
    courseName: new FormControl("", Validators.required),
    teachers: new FormControl(""),
    rooms: new FormControl(""),
    startDate: new FormControl(""),
    endDate: new FormControl("")
  })

  teachers: any[]
  rooms: any[]
  isLoading: boolean = false;
  showMessage: boolean = false;
  faArrowLeft = faArrowLeft;

  saveCourse(form: FormGroup) {
    if (this.coursesForm.status === "INVALID") {
      return false;
    } else {
      let curso: Curso = new Curso(this.coursesForm.value);

      this.service.createCourse(curso).subscribe(() => this.router.navigate(['/cursos']));
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.showMessage = true;
    }
  }

  constructor(
    private service: CursoService,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.isLoading = true
    this.service.getTeacher().subscribe(response => this.teachers = response)
    this.service.getRooms().subscribe(response => this.rooms = response)
    this.isLoading = false
  }

}
