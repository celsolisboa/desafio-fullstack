import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { professores } from 'src/app/professores';
import { salas } from 'src/app/salas';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  msgSucesso: any;
  msgErro: any;
  salas!: salas[];
  professores!: professores[];

  constructor(private service:ApiService) { }

  ngOnInit(): void {}

  toEdit(id:any){
    this.service.GetByIdProfessorData(id).subscribe((res)=>{
      console.log(res);
      this.professores = res.data;
    });

    this.service.GetByIdSalaData(id).subscribe((res)=>{
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
