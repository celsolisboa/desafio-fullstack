import { Component, OnInit } from '@angular/core';
import { Curso } from '../_model/curso.model';
import { CursoService } from './curso.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {


  constructor(private cursoService: CursoService, private router: Router) { }
  
  cursos: any[];
  faPlus = faPlus;
  getCourses() : any {
     this.cursoService.getCursos().subscribe(response => {
      this.cursos = response
    });
  }

  ngOnInit() {
    this.getCourses()
  }

}
