import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocalAPI } from 'src/app/app.api';
import { Router } from '@angular/router';

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

  saveCourse(form: FormGroup) {
    if (this.coursesForm.status === "INVALID") {
      console.log("FORMULARIO INVALIDO");
      return false;
    } else {
      this.http.post(`${LocalAPI}/cursos/cadastrar`, this.coursesForm.value).subscribe();
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.navigate(['/cursos']);
    }
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

}
