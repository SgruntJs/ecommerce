import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html',
  styleUrls: ['./gdpr.component.scss']
})
export class GdprComponent implements AfterViewInit, OnDestroy {

  hide = false;

  @ViewChild('btnContinue') btnContinue!: ElementRef;
  clickedElement: Subscription = new Subscription();

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


}
