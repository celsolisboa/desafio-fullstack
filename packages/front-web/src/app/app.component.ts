import { Component } from '@angular/core';
import { AppServicesService } from './app-services.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private appServices: AppServicesService) {}

  ngOnInit(): void {}

  isUserLoggedIn(): boolean {
    return this.appServices.isLoggedIn()
  }
}
