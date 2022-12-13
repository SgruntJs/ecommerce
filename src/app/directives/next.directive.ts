import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) { 
    
  }

  @HostListener('click')
  nextFunc() {
    const element = this.el.nativeElement.parentElement.children[0];
    const item = element.getElementsByClassName("item");
    element.append(item[0]);
  }

}
