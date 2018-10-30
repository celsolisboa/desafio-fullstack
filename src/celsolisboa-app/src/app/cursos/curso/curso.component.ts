import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() deleted = new EventEmitter<boolean>();

  constructor(private service: CursoService, private router: Router) { }
  faTrashAlt = faTrashAlt

  ngOnInit() {
  }

  deleteCourse(id) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.service.deleteCourse(id)
    // TODO: subscribe abaixo não executa o callback (emitir evento ao Parent)
      .subscribe(response => {
        this.deleted.emit(true)
      })
    this.deleted.emit(true)
    console.log("Deletado com sucesso!")
  }

}
