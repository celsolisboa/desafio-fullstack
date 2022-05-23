import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
    breakpoint: number = 1;
    constructor() {}

    ngOnInit(): void {
        if (window.innerWidth >= 1400){
            this.breakpoint = 3;
        } else {
            this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
        }
    }

    onResize(event: Event) {
        if (window.innerWidth >= 1400){
            this.breakpoint = 3;
        } else {
            this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
        }
    }
}
