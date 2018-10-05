import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {

  chartObj = {
    type: 'doughnut',
    labels: null as Array<any>,
    data: null as Array<any>,
    color: null as Array<any>,
    option: {}
  };
  constructor(public http: HttpClient) { }

  ngOnInit() {

  }


  carga() {
    this.http.get('http://localhost:3000/cursos/getgrafico').subscribe((res) => {
      console.log('RISE', res);

this.chartObj.data = Object.values(res);
this.chartObj.labels = Object.keys(res);

this.chartObj.option = {
  responsive: true
}

    });
  }
}
