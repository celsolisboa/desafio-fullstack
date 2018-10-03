import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalDirective } from 'angular-bootstrap-md';
import { CursoModel } from './../../Models/cursoModel';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  Dados: CursoModel;
  selectedData: CursoModel;
  @ViewChild('detalhe') public modal: ModalDirective;
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

  ShowDetails(details) {
    console.log(details);
    this.selectedData = details;
    this.modal.show();
  }
}
