import {Component, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, of } from "rxjs";
import { Sidenav } from "src/app/models/sidenav";

@Component({
  selector: "app-side-nav-content",
  templateUrl: "./side-nav-content.component.html",
  styleUrls: ["./side-nav-content.component.scss"],
})
export class SideNavContentComponent {

  @ViewChild('firstLevel') firstLevel!: ElementRef;
  @ViewChild('secondLevel') secondLevel!: ElementRef;
  sidenav$: Observable<Sidenav[]>;
  sidenavMenu: Sidenav[] = [
    {
      id: "1",
      text: "di tendenza",
      subMenu: [],
      isHighlight: true,
      isSeparator: false,
    },
    {
      id: "2",
      text: "Besteseller",
      subMenu: [],
      isHighlight: false,
      isSeparator: false,
    },
    {
      id: "3",
      text: "Novità",
      subMenu: [],
      isHighlight: false,
      isSeparator: false,
    },
    {
      id: "4",
      text: "I prodotti del momento",
      subMenu: [],
      isHighlight: false,
      isSeparator: false,
    },
    {
      id: "5",
      text: "",
      subMenu: [],
      isHighlight: false,
      isSeparator: true,
    },
    {
      id: "6",
      text: "Dispositivi E Contenuti Digitali",
      subMenu: [],
      isHighlight: true,
      isSeparator: false,
    },
    {
      id: "6",
      text: "Amazon Prime Video",
      subMenu: [
        {
          text: "Catalogo",
          value: "1",
        },
        {
          text: "Film",
          value: "2",
        },
        {
          text: "SerieTV",
          value: "3",
        },
      ],
      isHighlight: false,
      isSeparator: false,
    },
    {
      id: "7",
      text: "Amazon Music",
      subMenu: [
        {
          text: "Riproduci In Streaming",
          value: "1",
        },
        {
          text: "Amazon Music Unlimited",
          value: "2",
        },
        {
          text: "Amazon Music Prime",
          value: "3",
        },
      ],
      isHighlight: false,
      isSeparator: false,
    },
  ];
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
}
