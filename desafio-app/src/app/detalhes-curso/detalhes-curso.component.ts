import { SalaDTO } from './../models/sala.dto';
import { ProfessorDTO } from './../models/professor.dto';
import { ProfessorService } from './../services/professor.service';
import { SalaService } from './../services/sala.service';
import { Component, OnInit } from '@angular/core';
import toastr from "toastr";

@Component({
  selector: 'app-detalhes-curso',
  templateUrl: './detalhes-curso.component.html',
  styleUrls: ['./detalhes-curso.component.css']
})
export class DetalhesCursoComponent implements OnInit {

  professores: ProfessorDTO[]
  salas: SalaDTO[]

  constructor(
    private salaService: SalaService,
    private professorService: ProfessorService) { }

  ngOnInit() {
    this.salaService.findAll().subscribe( 
      resp => this.salas = resp,
      error => toastr.console.error("Problemas ao recuperar salas"));

    this.professorService.findAll().subscribe(
      resp => this.professores = resp,
      error => toastr.error("Problemas ao recuperar professores")
    )  
  }

}
