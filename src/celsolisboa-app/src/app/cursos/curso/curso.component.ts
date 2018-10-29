import { Component, OnInit, Input } from '@angular/core';
import { Curso } from 'src/app/_model/curso.model';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  @Input() curso: Curso

  constructor(private service: CursoService, private router: Router) { }
  faTrashAlt = faTrashAlt

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  deleteCourse(id): void {
    this.service.deleteCourse(id).subscribe()
    alert("Deletado com sucesso!")
  }

}
