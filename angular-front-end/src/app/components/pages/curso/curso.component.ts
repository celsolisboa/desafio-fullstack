import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor(private service:ApiService) { }

  readDataCurso: any;
  readDataSala: any;
  readDataProfessor: any;

  ngOnInit(): void {
    this.service.getAllDataCurso().subscribe((res)=>{
      console.log(res);

      this.readDataCurso = res.data;
    });

    this.service.getAllDataProfessor().subscribe((res)=>{
      console.log(res);

      this.readDataProfessor = res.data;
    });

    this.service.getAllDataSala().subscribe((res)=>{
      console.log(res);

      this.readDataSala = res.data;
    });
  }

}
