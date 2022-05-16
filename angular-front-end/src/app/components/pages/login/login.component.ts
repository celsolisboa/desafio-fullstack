import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login$!: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.login$ = this.http.post('http://localhost:8080/users', {
      email: 'email@aqui.com',
      senha: '123'
    })

  }

  onSubmit(email: string, senha: string){
    console.log(email, senha)
  }

  login(){

  }
    


}
