import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../curso.service';
import { Curso } from '../../curso.model';
import { Professor } from '../../../comum/models/professor.model';
import { Sala } from '../../../comum/models/sala.model';
import { UtilService } from '../../../comum/services/util.service';

@Component({
  selector: 'app-conteudo-list',
  templateUrl: './conteudo-list.component.html',
  styleUrls: ['./conteudo-list.component.scss']
})
export class ConteudoListComponent implements OnInit {

  constructor(private cursoService: CursoService,
  private utilService: UtilService) { }

  public cursos: Curso[] = []

  ngOnInit() {
    this.cursoService.getAll().subscribe(cursos => {
      this.cursos = cursos
    })
  }

  removerCurso(id: number) {
    this.cursoService.delete(id).subscribe(_ => {
      const indexCurso = this.cursos.findIndex(x => x.id === id)
      this.cursos.splice(indexCurso, 1)
      this.utilService.sendMessageSuccess('curso removido.')
    },
    err => this.utilService.sendMessageError(err))
  }

  getNomesProfessores(professores: Professor[]) {
    const retorno = professores.map(x => x.nome).join(',')
    return retorno
  }

  getDescricaoSalas(salas: Sala[]) {
    const retorno = salas.map(x => x.descricao).join(',')
    return retorno
  }

}
