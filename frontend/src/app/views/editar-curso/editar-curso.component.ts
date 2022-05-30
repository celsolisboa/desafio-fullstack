import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Observable } from 'rxjs';
import { CursoService } from 'src/app/curso.service';
import { ICursoEdit } from 'src/app/interface/ICursoEditar';
import { IProfessor } from 'src/app/interface/IProfessor';
import { ISala } from 'src/app/interface/ISala';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute
    ) { }

  professores: IProfessor[] = [];
  professores$: Observable<IProfessor[]> | undefined;


  salas: ISala[] = [];
  salas$: Observable<ISala[]> | undefined;
    
  selectProf: string = '';
  selectSala: string = '';



    idCurso:  number = 0;
    curso: string = '';
    inicioCurso: string  = '';
    fimCurso: string  = '';
    professorID: string = '';
    salaID : string= '';
    numeroSala: string = '';
    nomeProfessor: string = '';
    
  ngOnInit() {
   this.route.queryParams.subscribe(param => {
        this.cursoService.listarCursoPorId(param.id).subscribe(response => {
          this.idCurso = response.id
          this.curso = response.nome_curso
          this.inicioCurso = response.inicio
          this.fimCurso = response.fim
          this.salaID = response.sala_id
          this.professorID = response.professor_id
          this.numeroSala = response.numero_sala
          this.nomeProfessor = response.nome_professor
      })
    
    })
    this.professores$ = this.cursoService.listarProfessores();
    this.salas$ = this.cursoService.listarSalas();
   
  }
  


  selectChangeHandler (event: any) {
   
    this.selectProf = event.target.value;
  }
  selectChangeHandlerSala (event: any) {
    this.selectSala = event.target.value;
  }

  atualizarCursoPorId(event: any, id: number, nome_curso: string,  inicio: string, fim: string){
     event.preventDefault()

    const api = axios.put<ICursoEdit>(`api/cursos/${id}`,{
      nome_curso: this.curso,
      inicio: this.inicioCurso,
      fim: this.fimCurso,
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
