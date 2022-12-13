import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { 
    
  }

  @HostListener('click')
  prevFunc() {
    const element = this.el.nativeElement.parentElement.children[0];
    const item = element.getElementsByClassName("item");
    element.prepend(item[item.length - 1]);
  }

}
