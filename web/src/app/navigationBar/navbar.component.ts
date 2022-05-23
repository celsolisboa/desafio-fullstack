import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentTitle: string = 'Cursos';
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('courses/')) {
          this.currentTitle = 'Detalhes do curso';
        } else {
          this.currentTitle = 'Cursos';
        }
      }
    });
  }

  handleAddCourse(): void {
    this.router.navigate(['courses/new']);
  }

  verifyCurrentRouter() {}
}