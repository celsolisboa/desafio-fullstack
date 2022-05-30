import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/controller/services/api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  readData: any;
  deletemsg: any;

  constructor(private service:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.service.getAllDataCurso().subscribe((res)=>{
      this.readData = res.data;
    });
  }

  editId(id:any){
    this.router.navigate(['curso/editar/', id]);
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
