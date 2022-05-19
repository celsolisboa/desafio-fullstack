import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor(private service:ApiService) { }

  readData: any;


  ngOnInit(): void {
    this.service.getAllDataCurso().subscribe((res)=>{
      console.log(res);
      this.readData = res.data;
    });
  }

}
