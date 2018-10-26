import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbWindowService } from '@nebular/theme';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import Chart from 'chart.js';
@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {

  graficoObj: any;
  graficoData: any;
  options: any;
  showChart = false;
  display: boolean;
  public chartOptions: any = {
    responsive: false
  };
  constructor(public http: HttpClient, public winSrv: NbWindowService, public dialogService: NbDialogService) { }

  ngOnInit() {
    this.carga();
    this.options = {
      legend: {
        position: 'bottom'
      }
    };
  }
  carga() {
    this.http.get('https://ew12lbci58.execute-api.us-east-1.amazonaws.com/DEV/getgrafico').subscribe((res) => {
      console.log('RIhhjhjhSE', res);
      /* this.chartObj.dataR = Object.values(res[0]); */
      /*  this.chartObj.labels = Object.keys(res[0]); */
      this.montarGrafico(res);

    });
  }

  montarGrafico(event) {
    this.graficoObj = {
      labels: Object.keys(event),
      datasets: [
        {
          data: Object.values(event),
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#36A2EB',
            '#FFCE56'
          ]
        }
      ]
    };
  }
  showDetails(dialog: TemplateRef<any>) {
    this.display = true;
    this.dialogService.open(dialog);


  }
}
