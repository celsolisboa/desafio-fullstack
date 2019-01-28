import { Component } from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  constructor(private toasty: ToastyConfig) {
    this.toasty.theme = 'bootstrap';

  }
}
