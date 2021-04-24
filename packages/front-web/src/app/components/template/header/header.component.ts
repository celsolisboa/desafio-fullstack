import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AppServicesService } from 'src/app/app-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private appServices: AppServicesService
  ) {
    
    this.router.events.subscribe(event => {
      this.appServices.setActualRouteData()
    })
  }

  ngOnInit(): void {
    this.getCurrentPageTitle()
  }

  logoutUser(): void {
    this.appServices.logout()
  }

  getCurrentPageTitle(): string {
    return this.appServices.actualRouteData['title']
  }

  // getCurrentPageIcon(): string {
  //   return this.activatedRouteSnapshot.snapshot.data['icon']
  // }
}
