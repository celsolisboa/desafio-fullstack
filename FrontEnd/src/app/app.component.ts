import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  data: any;

  constructor(public http: HttpClient) {
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
    this.data = {
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
