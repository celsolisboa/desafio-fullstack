import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  readData: any;

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.service.getAllDataCurso().subscribe((res)=>{
      this.readData = res.data;
    });
  }

}
