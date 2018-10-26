import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CursoModel } from './../../Models/cursoModel';
import { HttpClient } from '@angular/common/http';
import { NbDialogService } from '@nebular/theme';
import { DateTimeAdapter } from 'ng-pick-datetime';
import { CallFunctionSrvService } from './../../Services/callFunctionSrv.service';
import { GetDataService } from './../../Services/getDataSrv.service';
import { config } from '../../environments/config';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  Dados: CursoModel[]
  display = false;
  Destino: string;
  selectedData: CursoModel = {
    id: null as number,
    sala: null as number,
    professor: null as string,
    materia: null as string,
    horaInicial: null as any,
    horaFinal: null as any
  };
  @ViewChild('dialog') dialog: TemplateRef<any>;
  @ViewChild('confirmDelete') confirmDelete: TemplateRef<any>;
  dropdowns = {
    Arr_professor: null as Array<any>,
    Arr_sala: null as Array<any>
  };
  constructor(public http: HttpClient,
    public getDataSrv: GetDataService,
    public dialogService: NbDialogService,
    public callSrv: CallFunctionSrvService,
    dateTime: DateTimeAdapter<any>) {
    this.loadData();
    dateTime.setLocale('pt-BR');

    this.callSrv.FuncaoChamada.subscribe((comando) => {
      if (comando.id === config.abrirInclusão) {
        this.Destino = config.abrirInclusão;
        this.openSalvar();
      }
    });
  }

  ngOnInit() {
  }

  loadData() {
    this.getDataSrv.getData().then((res: any) => {
      this.Dados = res;
      this.getDataSrv.getProfessor().then((professor: string[]) => {
        this.dropdowns.Arr_professor = professor;
      });
      this.dropdowns.Arr_sala = this.getDataSrv.getSalas();
      console.log(this.dropdowns);
    });
  }
  openSalvar() {
    this.selectedData.id = null as number;
    this.selectedData.materia = null;
    this.selectedData.professor = null;
    this.selectedData.sala = null;
    this.selectedData.horaInicial = null;
    this.selectedData.horaFinal = null;
    this.dialogService.open(this.dialog);
  }

  openEdit(dialog: TemplateRef<any>, item: CursoModel) {
    console.log(item);
    this.selectedData.id = item.id;
    this.selectedData.materia = item.materia;
    this.selectedData.professor = item.professor;
    this.selectedData.sala = Number(item.sala);
    this.selectedData.horaInicial = new Date(item.horaInicial);
    this.selectedData.horaFinal = new Date(item.horaFinal);
    this.Destino = config.abrirInclusão;
    this.dialogService.open(this.dialog);
  }

  save(btn) {
    console.log('Indo para o serviço', this.selectedData);
    if (this.Destino === config.abrirInclusão) {
      this.selectedData.id = Number(this.selectedData.id) + this.Dados.length + 1;
      this.selectedData.sala = Number(this.selectedData.sala);
      this.selectedData.horaInicial = new Date(this.selectedData.horaInicial).getTime();
      this.selectedData.horaFinal = new Date(this.selectedData.horaFinal).getTime();
      this.getDataSrv.saveData(this.selectedData).then((s) => {
        console.log(s);
        this.loadData();
        btn.close();
      });
    }
    if (this.Destino === config.abrirEdição) {
      this.getDataSrv.editData(this.selectedData).then((s) => {
        console.log(s);
        this.Dados = [];
        this.loadData();
        btn.close();
      });
    }
  }
  logs() {
    console.log(this.selectedData);

  }
  openDelete(dialog: TemplateRef<any>, PrimaryKey) {
    console.log('linha 111 de cursos', PrimaryKey);

    this.selectedData.id = PrimaryKey;
    this.dialogService.open(this.confirmDelete);
  }
  delete(btn) {
    this.getDataSrv.DeleteData(this.selectedData.id).then((s) => {
      this.Dados = [];
      this.loadData();
      btn.close();
    });
  }
}
