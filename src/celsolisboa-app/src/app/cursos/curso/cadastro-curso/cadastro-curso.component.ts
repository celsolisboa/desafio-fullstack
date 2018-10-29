import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoService } from '../../curso.service';
import { Curso } from 'src/app/_model/curso.model';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CadastroCursoComponent implements OnInit {
  coursesForm = new FormGroup({
    id: new FormControl(Math.round(Math.random() * 100)),
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
      // this.toastr.error("Formulário inválido")
      return false;
    } else {
      let curso: Curso = new Curso(this.coursesForm.value);

      this.service.createCourse(curso).subscribe();
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.showMessage = true;
      setTimeout(() => {
        this.router.navigate(['/cursos']);
      }, 1500)
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
