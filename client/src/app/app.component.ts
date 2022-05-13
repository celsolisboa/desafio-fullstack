import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';

  showMenu: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.showMenuEmmiter.subscribe(
      (showMenu) => (this.showMenu = showMenu)
    );

    if (localStorage.getItem('loggedin') === 'true') {
      this.authService.showMenuEmmiter.emit(true);
    }
  }
}
