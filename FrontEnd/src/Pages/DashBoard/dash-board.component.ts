import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursoModel } from './../../Models/cursoModel';
import { config } from '../../environments/config';
import { CallFunctionSrvService } from '../../Services/callFunctionSrv.service';
import * as jwt from 'jwt-decode';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  Dados: CursoModel;
  selectedData: CursoModel;
  teste: any;
  constructor(public http: HttpClient, public callSrv: CallFunctionSrvService) {
    console.log('wheohupoirwyiuwtgoriytyyyyyyyyyyyyyyyyyyy');
  }

  ngOnInit() {
    console.log('XXXTOKEN', jwt(config.token));
  }

}
