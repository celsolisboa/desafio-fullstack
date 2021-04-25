import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/app-services.service';
import { HeaderService } from 'src/app/components/template/header/header.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService, private appServices: AppServicesService) { 
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {}

  getUserFirstName(): string {
    return this.appServices.userData.name.split(" ")[0]
  }

}
