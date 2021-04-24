import { Component } from '@angular/core';
import { AppServicesService } from './app-services.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset)
  constructor(private appServices: AppServicesService, private breakpointObserver: BreakpointObserver) { }

  isUserLoggedIn(): boolean {
    return this.appServices.isLoggedIn()
  }

  set drawer(event: boolean) {
    this.appServices.drawerSideNav = event
  }
}
