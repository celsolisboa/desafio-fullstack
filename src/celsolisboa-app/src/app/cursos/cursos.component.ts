import { Component, OnInit } from '@angular/core';
import { ICurso } from '../_interfaces/icurso.interface';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  // cursos: ICurso[] = [
  //   {
  //     nome: "ADS",
  //     salas: [{ numero: 206 }, { numero: 2011 }],
  //     fim: new Date(),
  //     inicio: new Date(),
  //     professores: [{
  //       nome: "Gabriel"
  //     },
  //     {
  //       nome: "Thamires"
  //     }]
  //   },
  //   {
  //     nome: "Psicologia",
  //     salas: [{ numero: 111 }, { numero: 222 }],
  //     fim: new Date(),
  //     inicio: new Date(),
  //     professores: [{
  //       nome: "PsicoProf2"
  //     },
  //     {
  //       nome: "PsicoProf1"
  //     }]
  //   }
  // ];

  cursos: any[];
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.getCursos().subscribe(response => this.cursos = response);
  }

}
