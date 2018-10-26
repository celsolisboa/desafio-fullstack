import { Component, OnInit } from '@angular/core';
import { config } from '../../environments/config';
import { CallFunctionSrvService } from '../../Services/callFunctionSrv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public callSrv: CallFunctionSrvService) { }

  ngOnInit() {
  }

  novo() {
    const valor = '';
    const id = config.abrirInclusão;
    this.callSrv.ChamarFuncao(valor, id);
  }
}
