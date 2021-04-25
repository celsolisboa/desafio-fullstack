import { Component, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { Observable } from 'rxjs';
import { AppServicesService } from 'src/app/app-services.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset)
  constructor(
    private breakpointObserver: BreakpointObserver, 
    private appServices: AppServicesService
  ) { }

  get drawer(): boolean {
    return this.appServices.drawerSideNav
  }

  closeOnClickSideNav(): void {
    this.sideNavDraw.emit(!this.appServices.drawerSideNav)
  }

  @Output() 
  sideNavDraw: EventEmitter<boolean> = new EventEmitter();
}
