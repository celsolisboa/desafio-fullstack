import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visibleSidebar1: boolean;
  constructor(public sidebarSrv: NbSidebarService) { }

  ngOnInit() {
  }

  toggleSidebar(): boolean {
    this.sidebarSrv.toggle(true, 'menu-sidebar');
    return false;
  }
}
