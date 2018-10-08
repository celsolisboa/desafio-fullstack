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
  constructor(public http: HttpClient, public getDataSrv: GetDataService private dialogService: NbDialogService) {
    this.loadData();
    this.cargaDrop();
  }

  ngOnInit() {
  }


  cargaDrop() {
    this.Arr_professor = [
      { label: 'Select City', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];
  }

  loadData() {
    this.getDataSrv.getData().then((res: any) => {
      this.Dados = res;
      this.getDataSrv.getProfessor();
    });
  }

  ShowDetails(details) {
    this.selectedData = details;
    console.log('Heyyyy', this.selectedData);
    this.display = true;
  }

  open(dialog: TemplateRef<any>, item: CursoModel) {
    this.Dados.materia = item.materia;
    this.dialogService.open(dialog);
  }
}
