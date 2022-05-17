import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { professores } from 'src/app/professores';
import { salas } from 'src/app/salas';


@Component({
  selector: 'app-novo-curso',
  templateUrl: './novo-curso.component.html',
  styleUrls: ['./novo-curso.component.css']
})
export class NovoCursoComponent implements OnInit {

  msgSucesso: any;
  msgErro: any;
  salas!: salas[];
  professores!: professores[];

  constructor(private service:ApiService) { }

  ngOnInit(): void {

    this.service.getAllDataProfessor().subscribe((res)=>{
      console.log(res);

      this.professores = res.data;
    });

    this.service.getAllDataSala().subscribe((res)=>{
      console.log(res);

      this.salas = res.data;
    });

  }

  userForm = new FormGroup({
    'nome': new FormControl('', Validators.required),
    'professor': new FormControl('', Validators.required),
    'sala': new FormControl('', Validators.required),
    'inicio': new FormControl('', Validators.required),
    'fim': new FormControl('', Validators.required)
  });

  userSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res)=>{
      this.userForm.reset();
      this.msgSucesso = res.message;
        
      });
    } else {

      this.msgErro = 'Todos os campos são obrigatórios!'

    }

  }

}
