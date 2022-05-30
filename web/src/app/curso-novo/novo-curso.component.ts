import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/controller/services/api.service';
import { professores } from 'src/app/models/professores';
import { salas } from 'src/app/models/salas';
import { NgxMaskModule } from 'ngx-mask';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-curso',
  templateUrl: './novo-curso.component.html',
  styleUrls: ['./novo-curso.component.css'],
})
export class NovoCursoComponent implements OnInit {
  msgSucesso: any;
  msgErro: any;
  salas!: salas[];
  professores!: professores[];
  getParamid: any;

  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getParamid = this.route.snapshot.paramMap.get('id');
    this.service.loadById(this.getParamid).subscribe((res) => {
      console.log(res, 'res==>');
      this.userForm.patchValue({
        nome: res.data[0].nome,
        professor: res.data[0].professor,
        sala: res.data[0].sala,
        inicio: res.data[0].inicio,
        fim: res.data[0].fim,
      });
    });

    NgxMaskModule.forChild();

    this.service.getAllDataProfessor().subscribe((res) => {
      this.professores = res.data;
    });

    this.service.getAllDataSala().subscribe((res) => {
      this.salas = res.data;
    });
  }
  userForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    professor: new FormControl('', Validators.required),
    sala: new FormControl('', Validators.required),
    inicio: new FormControl('', Validators.required),
    fim: new FormControl('', Validators.required),
  });

  userSubmit() {
    if (this.userForm.valid) {
      this.service.createData(this.userForm.value).subscribe((res) => {
        this.msgSucesso = res.message;
        this.userForm.reset();
      });
    } else {
      this.msgErro = 'Todos os campos são obrigatórios!';
    }
  }

  userUpdate() {
    if (this.userForm.valid) {
      this.service
        .updateData(this.userForm.value, this.getParamid)
        .subscribe((res) => {
          console.log(res, 'resupdated');
          this.router.navigate(['/cursos']);
        });
    } else {
      this.msgErro = 'Todos os campos são obrigatorios serem preenchidos.';
    }
  }
}
