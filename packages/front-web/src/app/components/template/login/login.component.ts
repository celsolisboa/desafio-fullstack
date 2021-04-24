import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { AppServicesService } from 'src/app/app-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string = ''
  username: string = ''
  password: string = ''

  constructor(private appServices: AppServicesService, private router: Router) {}

  handleSubmit() {
    if (this.username && this.password) {
      this.appServices.userData.email = this.username
      this.appServices.userData.password = this.password
      this.appServices.getUserAsync().subscribe(user => {
        this.appServices.userData = user
        this.setUserInSessionStorage(user.email, user.id)
        this.router.navigate(['home'])
        this.showMessage("Login realizado com sucesso!")
      })
      return
    }
    this.showMessage("Por favor digite o login e a senha")
  }

  setUserInSessionStorage(email: string, id: string): void {
    sessionStorage.setItem("userId", id)
    sessionStorage.setItem("userEmail", email)
  }

  showMessage(msg: string): void {
    this.appServices.showSnackBarMessage(msg)
  }
}
