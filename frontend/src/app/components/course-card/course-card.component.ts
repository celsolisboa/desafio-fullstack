import { Component, OnInit } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  faTrashCan = faTrashCan;
  

  constructor() { }

  ngOnInit(): void {
  }

}
