import { GetDataService } from './../../Services/getDataSrv.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CursoModel } from './../../Models/cursoModel';
import { HttpClient } from '@angular/common/http';
import { SelectItem } from 'primeng/api';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { GraficosComponent } from '../graficos/graficos.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  Dados: CursoModel;
  display = false;
  professor: any;
  selectedData: CursoModel = {
    id: null as number,
    sala: null as string,
    professor: null as string,
    materia: null as string,
    horaInicial: null as string,
    horaFinal: null as string
  };
  dropdowns = {
    Arr_professor: null as Array<any>,
    Arr_sala: null as Array<any>
  };
  constructor(public http: HttpClient, public getDataSrv: GetDataService, public dialogService: NbDialogService) {
    this.loadData();

  }

  ngOnInit() {
  }

  loadData() {
    this.getDataSrv.getData().then((res: any) => {
      this.Dados = res;
      this.dropdowns.Arr_professor = this.getDataSrv.getProfessor();
      this.dropdowns.Arr_sala = this.getDataSrv.getSalas();
      console.log(this.dropdowns);
    });
  }

  open(dialog: TemplateRef<any>, item: CursoModel) {
    console.log(item);
    this.selectedData.id = item.id;
    this.selectedData.materia = item.materia;
    this.selectedData.professor = item.professor;
    this.selectedData.sala = item.sala;
    this.selectedData.horaInicial = item.horaInicial;
    this.selectedData.horaFinal = item.horaFinal;
    this.dialogService.open(dialog);
  }

  logs() {
    console.log(this.selectedData);

  }
}
