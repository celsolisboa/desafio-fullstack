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

    this.listProfessores = this.professoresServices.get();
    this.listSalas = this.salasService.get();

    console.log(this.listProfessores);

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

  onSubmit(curso) {

    const cursoTemp = { 
      nome: curso.nome, 
      "inicio": "2018-12-02T15:03:38.361Z", 
      "fim": "2018-12-02T15:03:38.361Z", 
      "id": "5c03f46c117a7cc23cb3b0a1", 
      "professorId": curso.professorId, 
      "salaId": curso.salaId, 
      "sala": { 
        "nome": "Temp 201", 
        "id": curso.salaId 
      }, 
      "professor": { 
        "nome": "Temporário", 
        "id": curso.professorId 
      } 
    };
    

    this.cursosServices.add(cursoTemp);
  };

}
