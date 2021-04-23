import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServicesService } from 'src/app/app-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private activatedRouteSnapshot: ActivatedRoute,
    private appServices: AppServicesService
  ) {}

  ngOnInit(): void {
    this.getCurrentPageTitle()
  }

  logoutUser(): void {
    this.appServices.logout()
  }

  getCurrentPageTitle(): string {
    this.activatedRouteSnapshot.data.subscribe(title => console.log(title))
    return "Milad"
  }

  // getCurrentPageIcon(): string {
  //   return this.activatedRouteSnapshot.snapshot.data['icon']
  // }
}
