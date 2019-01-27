import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm,  } from '@angular/forms';
import { Curso } from 'src/app/shared/Curso';
import { ToastyService } from 'ng2-toasty';


@Component({
  selector: 'app-detalhe-curso',
  templateUrl: './detalhe-curso.component.html',
  styleUrls: ['./detalhe-curso.component.css']
})
export class DetalheCursoComponent implements OnInit {
  curso = new Curso();
  id: any;
  data: any;
  professores; // [{ id: '1', nome: 'Carlos' }, { id: '2', nome: 'Maros' }, { id: '3', nome: 'Andrade' }];
  salas; // = [{ id: '1', sala: '1' }, { id: '2', sala: '2' }];


  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router,
    private toasty: ToastyService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.buscaAllProfessoresAndSalas();
    if (this.id) {
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

    } else {
      this.salvar(formCurso);
    }


  }
  atualizar(formCurso: NgForm) {
    this.cursoService.update(this.curso)
    .then(response => {
      this.toasty.success('Atualizado com sucesso!')
      this.data = response;
      this.router.navigate(['cursos']);
    }

      )

  }
  salvar(formCurso: NgForm) {
    this.cursoService.create(this.curso)
    .then(response => {
      this.toasty.success('cadastrado com sucesso!')
      this.data = response;
      console.log(this.data);
      this.router.navigate(['cursos/detalhes', this.data.data.id])

    }

      )

  }
  compare(t1: any, t2: any){
     return t1.id == t2.id;


  }
  buscaAllProfessoresAndSalas() {
    this.cursoService.professorAndSala()
    .then(response => {
      this.data = response;
      this.professores = this.data.professores;
      this.salas = this.data.salas;

    })
  }

}
