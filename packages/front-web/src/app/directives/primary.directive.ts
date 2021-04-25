import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrimary]'
})
export class PrimaryDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e35e6b'
  }
}
