import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CursosService } from '../../services/cursos.service';
import { ProfessoresService } from '../../services/professores.service';
import { SalasService } from '../../services/salas.service';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.less']
})
export class FormCursoComponent implements OnInit {

  form;
  listProfessores;
  listSalas;
  idCurso;
  curso;
  isEdit: boolean = false;
  professoresMarcados = [];

  constructor(
    private formBuilder: FormBuilder,
    private cursosServices: CursosService,
    private professoresServices: ProfessoresService,
    private salasService: SalasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { 

  }

  ngOnInit() {

    this.getListProfessores();
    this.getListSalas();

    this.form = this.formBuilder.group(
      {
        nome: this.formBuilder.control('', Validators.required),
        professores: this.formBuilder.control('', Validators.required),
        salas: this.formBuilder.control('', Validators.required),
        inicio: this.formBuilder.control('', Validators.required),
        fim: this.formBuilder.control('', Validators.required),
      }
    );

    this.activatedRoute.params.subscribe(params => {
      if(params['cursoId']){
        this.idCurso = params['cursoId'];
        this.isEdit = true;

        this.cursosServices.getById(this.idCurso).subscribe( curso =>{
          this.curso = curso;
          const salasSelecionadas = this.curso.salas.map( sala => sala._id );
          const professoresSelecionados = this.curso.professores.map( professor => professor._id );

          this.form = this.formBuilder.group(
            {
              nome: this.formBuilder.control(this.curso.nome, Validators.required),
              professores: this.formBuilder.control(professoresSelecionados, Validators.required),
              salas: this.formBuilder.control(salasSelecionadas, Validators.required),
              inicio: this.formBuilder.control(this.curso.inicio, Validators.required),
              fim: this.formBuilder.control(this.curso.fim, Validators.required),
            }
          );
        });
      }
    });
  }

  

  getListProfessores() {
    this.listProfessores = [];
    this.professoresServices.get()
      .subscribe((data: {}) => {
        console.log(data);
        this.listProfessores = data;
      }
    );
  }

  getListSalas() {
    this.listSalas = [];
    this.salasService.get()
      .subscribe((data: {}) => {
        console.log(data);
        this.listSalas = data;
      }
    );
  }

  onSubmit(curso) {
    if(this.isEdit){
      this.cursosServices.edit(this.idCurso, curso).subscribe( () => {
        this.router.navigate(['/cursos']);
      });
    } else {
      this.cursosServices.add(curso).subscribe( () => {
        this.router.navigate(['/cursos']);
      });
    }
  };

}
