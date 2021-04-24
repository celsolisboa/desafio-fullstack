import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/app-services.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
    private appServices: AppServicesService
  ) {
  }

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
}
