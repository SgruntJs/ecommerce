import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
  selector: "app-popover",
  template: `
    <div class="popover" #popover (mouseleave)="closePopover()">
      <div>{{ content }}</div>
      <div>lorem ipsum</div>
    </div>
  `,
  styles: [
    `
      .popover {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        padding: 10px;
        position: absolute;
        z-index: 1000;
      }
      .popover::before {
        border-color:  transparent transparent #ccc  transparent ;
        border-style: solid;
        border-width: 10px;
        content: "";
        height: 0;
        left: 50%;
        margin-left: -10px;
        position: absolute;
        top: -21px;
        width: 0;
      }
      .popover::after {
        border-color:  transparent transparent #fff  transparent ;
        border-style: solid;
        border-width: 10px;
        content: "";
        height: 0;
        left: 50%;
        margin-left: -10px;
        position: absolute;
        top: -20px;
        width: 0;
      }
    `,
  ],
})
export class PopoverComponent {
  @Input() content!: string;
  @ViewChild('popover') popover!: ElementRef;

  closePopover() {
    this.popover.nativeElement.style.display = 'none';
    setTimeout(() => {
      this.popover.nativeElement.style.display = 'block';
    },1000);
  }

}
