import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

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

  constructor(
    private formBuilder: FormBuilder,
    private cursosServices: CursosService,
    private professoresServices: ProfessoresService,
    private salasService: SalasService
  ) { 

  }

  ngOnInit() {

    this.getListProfessores();
    this.getListSalas()

    this.form = this.formBuilder.group(
      {
        nome: this.formBuilder.control('', Validators.required),
        professorId: this.formBuilder.control('', Validators.required),
        salaId: this.formBuilder.control('', Validators.required),
        inicio: this.formBuilder.control('', Validators.required),
        fim: this.formBuilder.control('', Validators.required),
      }
    );
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
    this.cursosServices.add(curso).subscribe();
  };

}
