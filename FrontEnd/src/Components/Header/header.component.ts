import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visibleSidebar1: boolean;
  @ViewChild('detalhe') public modal: ModalDirective;
  constructor(public sidebarSrv: NbSidebarService) { }

  ngOnInit() {
  }


  toggleSidebar(): boolean {
    this.sidebarSrv.toggle(true, 'menu-sidebar');
    return false;
  }
}
