import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../../comum/services/professor.service';
import { SalaService } from '../../comum/services/sala.service';
import { Sala } from '../../comum/models/sala.model';
import { Professor } from '../../comum/models/professor.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CursoDto } from '../cursoDto.model';
import { CursoService } from '../curso.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Curso } from '../curso.model';
import { UtilService } from '../../comum/services/util.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {


  constructor(
    private professorService: ProfessorService,
    private salaService: SalaService,
    private cursoService: CursoService,
    private formBuilder: FormBuilder,
    // private snackBar: MatSnackBar,
    private utilService: UtilService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  private professores: Array<Professor> = []
  private salas: Array<Sala> = []
  public teste = []

  private formCurso = this.formCursoBuilder()

  ngOnInit() {
    this.professorService.getAll().subscribe(professores => {
      this.professores = professores
    })
    this.salaService.getAll().subscribe(salas => {
      this.salas = salas
    })

    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.cursoService.getById(params.id).subscribe(curso => {
          this.formCurso = this.formCursoBuilder(curso)
        })
      }
    })
  }

  formCursoBuilder(curso: Curso = undefined) {
    curso = curso ? curso : new Curso();
    return new FormGroup({
      id: new FormControl(curso.id),
      nome: new FormControl(curso.nome, Validators.required)
      , horaInicio: new FormControl(curso.horaInicio, Validators.required)
      , horaFim: new FormControl(curso.horaFim, Validators.required)
      , idProfessores: new FormControl(curso.Professores.map(x => x.id), Validators.required)
      , idSalas: new FormControl(curso.Salas.map(x => x.id), Validators.required)
    })
  }


  salvarCurso() {
    const cursoPost = new CursoDto(this.formCurso.controls.id.value,
      this.formCurso.controls.nome.value,
      this.formCurso.controls.horaInicio.value,
      this.formCurso.controls.horaFim.value,
      this.formCurso.controls.idSalas.value,
      this.formCurso.controls.idProfessores.value,
    )
    
    if (!cursoPost.id) {
      this.cursoService.create(cursoPost).subscribe(data => {
          this.sucessoCurso("Curso adicionado")
      },
        err => this.utilService.sendMessageError(err))
    } else {
      this.cursoService.update(cursoPost).subscribe(sucesso => {
          this.sucessoCurso("Curso atualizado")
      }
    , err => this.utilService.sendMessageError(err))
    }
  }

  sucessoCurso(msg:string) {
    this.router.navigate(['/curso'])
    this.utilService.sendMessageSuccess(msg)
  }
}


