import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, } from '@angular/forms';
import { Curso } from 'src/app/shared/Curso';
import { ToastyService } from 'ng2-toasty';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';


@Component({
  selector: 'app-detalhe-curso',
  templateUrl: './detalhe-curso.component.html',
  styleUrls: ['./detalhe-curso.component.css']
})
export class DetalheCursoComponent implements OnInit {
  curso = new Curso();
  id: any;
  data: any;
  professores;
  salas;

  myOptions: IMultiSelectOption[];
  dropdownSettings = {};
  salass: IMultiSelectOption[];
  salaSettings = {};

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router,
    private toasty: ToastyService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.buscaAllProfessoresAndSalas();


    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nome',
      selectAllText: 'Todos',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false,

    };
    this.salaSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'sala',
      selectAllText: 'Todos',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false,

    };
    this.salass = this.salas;
    this.myOptions = this.professores
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

      })

  }

  adicionar(formCurso: NgForm) {
    if (!formCurso.valid) {
      this.toasty.error('Formulario invalido!');
      return false;
    }
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
      })
      .catch(
        response => {
          this.toasty.error('Erro');
        });

  }
  salvar(formCurso: NgForm) {
    this.cursoService.create(this.curso)
      .then(response => {
        this.toasty.success('cadastrado com sucesso!')
        this.data = response;
        this.router.navigate(['cursos/detalhes', this.data.data.id])
      })
      .catch(
        response => {
          this.toasty.error('Erro');
        });

  }
  compare(t1: any, t2: any) {
    return t1.id == t2.id;


  }
  buscaAllProfessoresAndSalas() {
    this.cursoService.professorAndSala()
      .then(response => {
        this.data = response;
        this.professores = this.data.professores;
        this.salas = this.data.salas;

      })
      .catch(
        response => {
          this.toasty.error('Erro');
        });
  }

}
