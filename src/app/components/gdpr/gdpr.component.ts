import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html',
  styleUrls: ['./gdpr.component.scss']
})
export class GdprComponent implements AfterViewInit, OnDestroy {

  hide = false;
  showMoreText = false;

  @ViewChild('btnContinue') btnContinue!: ElementRef;
  @ViewChild('show') showParagraph!: ElementRef;
  clickedElement: Subscription = new Subscription();

  constructor(private renderer: Renderer2) {

  }

  ngAfterViewInit() {
      this.toggleHide();
  }

  toggleHide() {
    this.clickedElement = fromEvent(this.btnContinue.nativeElement, 'click').subscribe(() => {
          this.hide = !this.hide;
    });
  }

  ngOnDestroy() {
    this.clickedElement.unsubscribe();
  }

  acceptCookies() {
    // save all cookies and hide container
    this.hide = !this.hide;
  }


  showMore() {
    console.log(this.showParagraph.nativeElement);
    //const el = this.showParagraph.nativeElement;
    // this.renderer.addClass(el, 'show');
    this.showMoreText = !this.showMoreText;
  }

}
