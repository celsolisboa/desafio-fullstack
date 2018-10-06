import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursoModel } from './../../Models/cursoModel';
import Chart from 'chart.js';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  Dados: CursoModel;
  selectedData: CursoModel;
  teste: any;
  constructor(public http: HttpClient) {

  }

  ngOnInit() {

  }
  /* /Users/ons/Documents/teste117/DFStack/FrontEnd/DashBoardCelso/src/assets/mockUpData.json */
}
