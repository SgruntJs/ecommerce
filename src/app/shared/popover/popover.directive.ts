import { Directive, Input, ViewContainerRef, ComponentFactoryResolver, OnDestroy, ComponentRef, HostListener } from '@angular/core';

import { PopoverComponent } from './popover.component';

@Directive({
  selector: '[appPopover]'
})
export class PopoverDirective implements OnDestroy {
  @Input() content!: string;

  private popoverRef: ComponentRef<PopoverComponent> | any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  private create() {
    this.viewContainerRef.clear();

    const factory = this.componentFactoryResolver.resolveComponentFactory(PopoverComponent);
    this.popoverRef = this.viewContainerRef.createComponent(factory);
    this.popoverRef.instance.content = this.content;
  }

  private remove() {
    this.popoverRef.destroy();
    this.popoverRef = null;
  }

  ngOnDestroy() {
    if (this.popoverRef) {
      this.remove();
    }
  }

  @HostListener('mouseover')
  onMouseOver() {
    if (!this.popoverRef) {
      this.create();
    }
  }

  // @HostListener('mouseout')
  // onMouseOut() {
  //   if (this.popoverRef) {
  //     this.remove();
  //   }
  // }
}
