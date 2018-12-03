import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  titulo = "Teste";
  professor = "Álvares de Azavedo";
  sala = "503";
  inicio;
  fim;

  constructor() { 
    this.inicio = new Date(2018, 11, 1, 9, 0, 0);
    this.fim = new Date(2018, 11, 1, 11, 0, 0);
  }

  ngOnInit() {
  }

  onDelete(){
    console.log('deleted!');
  }

}
