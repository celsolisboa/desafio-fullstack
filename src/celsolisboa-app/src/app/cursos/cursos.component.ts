import { Component, OnInit } from '@angular/core';
import { Curso } from '../_model/curso.model';
import { CursoService } from './curso.service';
import { faPlus, faSpinner, faFrown } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {


  constructor(private cursoService: CursoService, private router: Router) { }
  
  cursos: any[];
  isLoading: boolean = false
  faPlus = faPlus;
  faSpinner = faSpinner;
  faFrown = faFrown;
  getCourses() : any {
    this.isLoading = true
     this.cursoService.getCursos().subscribe(response => {
      this.cursos = response
      this.isLoading = false
    });
  }

  onDeleted(): any {
    setTimeout(() => {
      this.getCourses();
    }, 1500)
  }

  ngOnInit() {
    this.getCourses()
  }

}
