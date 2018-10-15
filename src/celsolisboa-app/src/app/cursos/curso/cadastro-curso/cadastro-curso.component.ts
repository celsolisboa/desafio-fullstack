import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocalAPI } from 'src/app/app.api';

@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CadastroCursoComponent implements OnInit {
  coursesForm = new FormGroup({
    id: new FormControl(Math.random() * 10000),
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
      console.log(`${LocalAPI}/cursos/cadastrar`);
      return this.http.post(`${LocalAPI}/cursos/cadastrar`, this.coursesForm.value).subscribe(() => console.log("sucesso"));
    }
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
