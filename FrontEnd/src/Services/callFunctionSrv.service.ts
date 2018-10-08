import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class CallFunctionSrvService {


  FuncaoOrigem = new Subject<any>();
  FuncaoChamada = this.FuncaoOrigem.asObservable();
  constructor(public http: HttpClient, public route: Router) { }

  ChamarFuncao(valor: any, id: string) {
    const comando = { valor: valor, id: id };
    this.FuncaoOrigem.next(comando);
  }
}
