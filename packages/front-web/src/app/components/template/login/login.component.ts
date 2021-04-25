import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AppServicesService } from 'src/app/app-services.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private _userData = new BehaviorSubject<User>({
    name: "",
    email: "",
    password: ""
  })

  error: string = ''

  private _actionButton = new BehaviorSubject<string>('Login')

  constructor(private appServices: AppServicesService, private router: Router) {}

  handleSubmit(): void {
    if (this.userData.email && this.userData.password) {
      this.actionButton == 'Login' ? this.loginUser() : this.subscribeUser()
      return
    }
    this.showMessage("Por favor digite o login e a senha",true)
  }

  loginUser(): void {
    this.appServices.userData.email = this.userData.email
      this.appServices.userData.password = this.userData.password
      this.appServices.getUserAsync().subscribe(user => {
        this.saveUser(user)
        this.showMessage("Login realizado com sucesso!")
      })
  }

  subscribeUser(): void {
    if(this.userData.name) {
      this.appServices.postUserAsync(this.userData).subscribe(user => {
        this.saveUser(user)
        this.showMessage("Usuário criado com sucesso!")
      })
      return
    }
    this.showMessage("Por favor digite seu nome",true)
  }

  saveUser(user: User): void {
    this.appServices.userData = user
    this.setUserInSessionStorage(user.name, user.email, user.id)
    this.router.navigate(['home'])
  }

  setUserInSessionStorage(name: string, email: string, id: string): void {
    sessionStorage.setItem("userId", id)
    sessionStorage.setItem("userEmail", email)
    sessionStorage.setItem("userName", name)
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.appServices.showSnackBarMessage(msg,isError)
  }

  subscribeAction(): void {
    if (this.actionButton=='Login') {
      this.actionButton = "Cadastrar-se"
      return
    }
    this.actionButton = "Login"
  }

  get userData(): User {
    return this._userData.value
  }

  set userData(user: User) {
    this._userData.next(user)
  }

  set actionButton(text: string) {
    this._actionButton.next(text)
  }

  get actionButton(): string {
    return this._actionButton.value
  }
}
