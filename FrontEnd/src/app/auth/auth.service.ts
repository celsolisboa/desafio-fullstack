import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserUrl = 'http://localhost:8000/api/user';
  constructor(private http: HttpClient)  { }

   login(user: any){
    return this.http.post(this.UserUrl, user)
    .toPromise()
    .then(response =>{
        this.guardaToken(response);
     //   console.log(response);

    }
     )
    .catch(response =>console.log(response))

  }
  guardaToken(token:any) {
    localStorage.setItem('token', token.token);
    
  }
}
