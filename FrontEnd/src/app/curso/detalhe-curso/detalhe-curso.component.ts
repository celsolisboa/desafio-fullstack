import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Curso } from 'src/app/shared/Curso';

@Component({
  selector: 'app-detalhe-curso',
  templateUrl: './detalhe-curso.component.html',
  styleUrls: ['./detalhe-curso.component.css']
})
export class DetalheCursoComponent implements OnInit {
  curso = new Curso();
  id: any;
  data:any;

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.buscar(this.id);
    }

  }

  buscar(id: any) {
    this.cursoService.buscar(id)
      .then(Response => {
        this.data = Response;
        this.curso.id = this.data.data.id;
        this.curso.nome = this.data.data.nome;
        this.curso.inicio = this.data.data.inicio;
        this.curso.fim = this.data.data.fim;
        this.curso.professor = this.data.data.professor;
        this.curso.sala = this.data.data.sala;
        console.log(this.curso);
      })

  }

  adicionar(formCurso: NgForm) {
  //  console.log(formCurso);
    if (this.id) {
      this.atualizar(formCurso);

    }else {
      this.salvar(formCurso);
    }


  }
  atualizar(formCurso: NgForm) {
    console.log(formCurso);

  }
  salvar(formCurso: NgForm) {
   // console.log(formCurso);

  }

}
