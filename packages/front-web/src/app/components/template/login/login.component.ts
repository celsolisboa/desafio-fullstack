import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { AppServicesService } from 'src/app/app-services.service';
import { User } from '../../user.model';

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
      this.appServices.getUsersAsync().subscribe(users => {
          if (this.verifyUserAndPassword([users])) {
            this.setUser([users])
            this.router.navigate(['home'])
            this.showMessage("Login realizado com sucesso!")
          }
      })
      // this.appServices.userLogin.name = this.username
      return
    }
    this.showMessage("Por favor digite o login e a senha")
  }

  verifyUserAndPassword(users: any[]): boolean {
    return users[0].some((user: { email: string; password: string; }) =>
      user.email == this.username && user.password == this.password
    )
  }

  setUser(users: any[]): void {
    const getUser = users[0].filter((user: { email: string; password: string; }) =>
      user.email == this.username && user.password == this.password
    )[0]
    this.appServices.userLogin = getUser
  }

  showMessage(msg: string): void {
    this.appServices.showSnackBarMessage(msg)
  }
}
