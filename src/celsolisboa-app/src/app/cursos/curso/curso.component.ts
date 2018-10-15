import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from 'src/app/_interfaces/icurso.interface';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { LocalAPI } from 'src/app/app.api';
import { Router } from '@angular/router';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  @Input() curso: ICurso

  constructor(private service: CursoService, private router: Router) { }
  faTrashAlt = faTrashAlt

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  deleteCourse(id): void {
    this.service.deleteCourse(id).subscribe()
  }

}
