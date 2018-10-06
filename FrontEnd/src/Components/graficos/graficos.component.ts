import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js';
@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {

  graficoObj: any;
  showChart = false;
  public chartOptions: any = {
    responsive: false
  };

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.carga();
  }

  carga() {
    this.http.get('http://localhost:3000/cursos/getgrafico').subscribe((res) => {
      console.log('RIhhjhjhSE', Object.keys(res[0]));
      /* this.chartObj.dataR = Object.values(res[0]); */
      /*  this.chartObj.labels = Object.keys(res[0]); */
      this.montarGrafico(res[0]);

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



    }
  }

}
