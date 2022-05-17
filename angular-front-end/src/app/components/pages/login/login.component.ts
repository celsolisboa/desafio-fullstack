import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private service:ApiService, private router:Router) {}

  msgErro: any;

  ngOnInit(): void {

  }

  userForm = new FormGroup({
    'email': new FormControl('', Validators.required),
    'senha': new FormControl('', Validators.required),
  });

  onSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.login(this.userForm.value).pipe(
        catchError(error => {
          return  of([])
        })
      ).subscribe((res)=>{
        this.userForm.reset();    
        });
      console.log('Login realizado');
      this.router.navigate(['/cursos'])
        

    } else {

      this.msgErro = 'Email ou senha inválidos!'
    
    }
  }


}
