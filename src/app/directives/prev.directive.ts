import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    
  }

  @HostListener('click')
  prevFunc() {
    const element = this.el.nativeElement.parentElement.children[0];
    console.log('element');
    this.renderer.setStyle(element, 'transform', 'translateX(-100%)');
    this.renderer.setStyle(element, 'transition', 'all .3s ease-in-out');
  }

}
