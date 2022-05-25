import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { CursoService } from 'src/app/curso.service';
import { IProfessor } from 'src/app/IProfessor';
import { ISala } from 'src/app/ISala';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  constructor(private cursoService: CursoService) { }

  professores: IProfessor[] = [];
  professores$: Observable<IProfessor[]> | undefined;

  salas: ISala[] = [];
  salas$: Observable<ISala[]> | undefined;

  selectProf: string = '';
  selectSala: string = '';
  ngOnInit() {
   this.professores$ = this.cursoService.listarProfessores();
   this.salas$ = this.cursoService.listarSalas();
  }


  selectChangeHandler (event: any) {
    //update the ui
    this.selectProf = event.target.value;
  }
  selectChangeHandlerSala (event: any) {
    //update the ui
    this.selectSala = event.target.value;
  }
  
  criar(event: any, nome_curso: string,  inicio: string, fim: string){
    event.preventDefault()

    const api = axios.put('api/cursos',{
      nome_curso: nome_curso,
      inicio: inicio,
      fim: fim,
      sala_id: this.selectSala,
      professor_id: this.selectProf,
    }).
        then(response => {
          if(response){
            console.log(this.selectProf + this.selectSala)
            window.location.href = '/cursos'
          }
        }).catch(e =>{
         console.log(e)
          
        })
  }

}
