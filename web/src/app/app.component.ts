import { Component } from "@angular/core";
import { AuthService } from "./controller/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tittle = 'Web';
  showMenu = false;
  constructor(private authService: AuthService) {
    this.authService.showMenuEmmiter.subscribe(
      (showMenu) => (this.showMenu = this.showMenu)
    );
    if (localStorage.getItem('loggedin') === 'true') {
      this.authService.showMenuEmmiter.emit(true)
    }
  }
}