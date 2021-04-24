import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AppServicesService } from 'src/app/app-services.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset)
  constructor(
    private headerService: HeaderService,
    private appServices: AppServicesService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {}

  logoutUser(): void {
    this.appServices.logout()
  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }

  openSideNav(): void {
    this.sideNavDraw.emit(!this.appServices.drawerSideNav)
  }

  @Output() 
  sideNavDraw: EventEmitter<boolean> = new EventEmitter();
}
