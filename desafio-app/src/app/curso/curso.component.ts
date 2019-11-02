import { toastr } from 'toastr';
import { CursoService } from './../services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  lista

  constructor(
    private cursoService: CursoService,
    private router: Router) { }

  ngOnInit() {
    this.cursoService.findAll()
    .subscribe(resp => {
      this.lista = resp
    }, error => toastr.error(error));   
  }

  sizeProfessores(itens, index){
    if(itens.length > 1 && index != 0){
      return 'e';
    }
  }

  detalhes() {
    this.router.navigate(['/detalhes']);
  }

}
