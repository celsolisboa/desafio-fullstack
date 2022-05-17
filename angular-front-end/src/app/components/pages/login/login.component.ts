import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, empty, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private service:ApiService, private router:Router) {}

  msgErro: any;
  msgFail: any;
  loguei = false;

  ngOnInit(): void {

  }

  userForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'senha': new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

 

  onSubmit(){
    if(this.userForm.valid){
      this.service.login(this.userForm.value).subscribe((res)=>{
          
        if(res != Object){
          console.log('Login realizado');
          this.router.navigate(['/cursos'])
          this.userForm.reset(); 
        }         
        },
        (httpError) => {
          this.msgFail = 'Email ou senha inválidos!'
        }
        );      

    } else {

      this.msgErro = 'Email e senha obrigatórios!'
    
    }
  }

  handleError(){

  }

}
