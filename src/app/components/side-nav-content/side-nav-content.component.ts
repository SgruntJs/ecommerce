import {Component, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, of } from "rxjs";
import { Sidenav } from "src/app/models/sidenav";
import  { SIDENAV } from './sidenav';

@Component({
  selector: "app-side-nav-content",
  templateUrl: "./side-nav-content.component.html",
  styleUrls: ["./side-nav-content.component.scss"],
})
export class SideNavContentComponent {

  @ViewChild('firstLevel') firstLevel!: ElementRef;
  @ViewChild('secondLevel') secondLevel!: ElementRef;
  sidenav$: Observable<Sidenav[]>;
  sidenavMenu: Sidenav[] = SIDENAV;

  constructor(private renderer:Renderer2) {
    this.sidenav$ = of(this.sidenavMenu);
  }

  openSecondLevel() {
      const first = this.firstLevel.nativeElement;
      const second = this.secondLevel.nativeElement;
      this.renderer.addClass(first,'menu-translateX-left');
      this.renderer.removeClass(first,'menu-visible');
      this.renderer.addClass(second,'menu-translateX');
      this.renderer.addClass(second,'menu-visible');
      this.renderer.removeClass(second,'menu-translateX-right');
  }
  backFirst() {
    const first = this.firstLevel.nativeElement;
    const second = this.secondLevel.nativeElement;
    this.renderer.removeClass(first,'menu-translateX-left');
    this.renderer.addClass(first,'menu-visible');
    this.renderer.removeClass(second,'menu-translateX');
    this.renderer.removeClass(second,'menu-visible');
    this.renderer.addClass(second,'menu-translateX-right');
  }
}
