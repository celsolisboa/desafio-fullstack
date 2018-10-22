import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoService } from '../../curso.service';

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

  saveCourse(form: FormGroup) {
    if (this.coursesForm.status === "INVALID") {
      console.log("FORMULARIO INVALIDO");
      return false;
    } else {
      this.service.createCourse(this.coursesForm.value).subscribe();
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.navigate(['/cursos']);
    }
  }

  constructor(private service: CursoService, private router: Router) { }

  ngOnInit() {
    this.service.getTeacher().subscribe(response => this.teachers = response)
    this.service.getRooms().subscribe(response => this.rooms = response)
  }

}
