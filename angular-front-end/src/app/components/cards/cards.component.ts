import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  readData: any;
  deletemsg: any;

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.service.getAllDataCurso().subscribe((res)=>{
      this.readData = res.data;
    });
  }

  deleteId(id:any){
    console.log(id)
    this.service.deleteData(id).subscribe((res)=> {
      console.log(res, 'deletado');
      this.deletemsg = res.message

      this.service.getAllDataCurso().subscribe((res)=>{
        this.readData = res.data;
        
      });
    });
  }

}
