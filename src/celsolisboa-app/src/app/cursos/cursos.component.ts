import { Component, OnInit } from '@angular/core';
import { ICurso } from '../_interfaces/icurso.interface';
import { CursoService } from './curso.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  faPlus = faPlus;
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.getCursos().subscribe(response => this.cursos = response);
  }

}
