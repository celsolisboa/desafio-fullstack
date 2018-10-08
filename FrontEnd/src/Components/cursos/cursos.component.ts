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
  selectedData: CursoModel;
  display = false;
  professor: any;
  Arr_professor: SelectItem[];
  constructor(public http: HttpClient, public getDataSrv: GetDataService, public dialogService: NbDialogService) {
    this.loadData();

  }

  ngOnInit() {
  }

  loadData() {
    this.getDataSrv.getData().then((res: any) => {
      this.Dados = res;
     this.Arr_professor = this.getDataSrv.getProfessor();
    });
  }

  ShowDetails(details) {
    this.selectedData = details;
    console.log('Heyy', this.selectedData);
    this.display = true;
  }

  open(dialog: TemplateRef<any>, item: CursoModel) {
    this.Dados.materia = item.materia;
    this.dialogService.open(dialog);
  }
}
