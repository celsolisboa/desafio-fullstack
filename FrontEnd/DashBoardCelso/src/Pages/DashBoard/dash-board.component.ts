import { CursoModel } from './../../Models/cursoModel';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  Dados: CursoModel;
  constructor(public http: HttpClient) {
    this.getData();
  }

  ngOnInit() {
  }
  /* /Users/ons/Documents/teste117/DFStack/FrontEnd/DashBoardCelso/src/assets/mockUpData.json */


  getData() {
    this.http.get('./assets/mockUpData.json').subscribe((res: CursoModel) => {
      console.log('hey!', res);
      this.Dados = res;
    });
  }
}
