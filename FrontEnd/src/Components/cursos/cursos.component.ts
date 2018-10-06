import { Component, OnInit, ViewChild } from '@angular/core';
import { CursoModel } from './../../Models/cursoModel';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  Dados: CursoModel;
  selectedData: CursoModel;
  constructor(public http: HttpClient) {
    this.getData();
  }

  ngOnInit() {
  }




  getData() {
    this.http.get('http://localhost:3000/cursos/listar').subscribe((res: CursoModel) => {
      console.log('hey!', res);
      this.Dados = res;
    });
  }

  ShowDetails(details) {
    console.log(details);
    this.selectedData = details;

  }
}
