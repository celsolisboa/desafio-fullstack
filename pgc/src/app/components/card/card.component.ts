import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() cardInfo;
  @Output() delete = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }

  onDelete(){
    this.delete.emit(this.cardInfo);
  }

}
