import {
  Component,
  Renderer2,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from "@angular/core";
import { Observable, of } from "rxjs";
import { Sidenav } from "src/app/models/sidenav";
import { SIDENAV } from "./sidenav";

@Component({
  selector: "app-side-nav-content",
  templateUrl: "./side-nav-content.component.html",
  styleUrls: ["./side-nav-content.component.scss"],
})
export class SideNavContentComponent {
  @ViewChild("firstLevel") firstLevel!: ElementRef;
  @ViewChildren("secondLevel") secondLevel!: QueryList<ElementRef>;

  sidenav$: Observable<Sidenav[]>;
  sidenavMenu: Sidenav[] = SIDENAV;

  constructor(private renderer: Renderer2) {
    this.sidenav$ = of(this.sidenavMenu);
  }

  openSecondLevel(id: string) {
    console.log(id);
    const first = this.firstLevel.nativeElement;
    // const second = this.secondLevel.nativeElement;
    const el = document.getElementById("second-" + id);
    // this.secondLevel.forEach( item => {
    //   this.renderer
    //   this.renderer.addClass(item,'menu-translateX');
    //   this.renderer.addClass(item,'menu-visible');
    //   this.renderer.removeClass(item,'menu-translateX-right');
    // })
    console.log(el);
    el?.classList.add("menu-translateX");
    el?.classList.add("menu-visible");
    el?.classList.remove("menu-translateX-right");
    this.renderer.addClass(first, "menu-translateX-left");
  }

  backFirst(id: string) {
    const first = this.firstLevel.nativeElement;
    //const second = this.secondLevel.nativeElement;
    this.renderer.removeClass(first, "menu-translateX-left");
    this.renderer.addClass(first, "menu-visible");
    // this.renderer.removeClass(second,'menu-translateX');
    // this.renderer.removeClass(second,'menu-visible');
    // this.renderer.addClass(second,'menu-translateX-right');
    const el = document.getElementById("second-" + id);
    el?.classList.remove("menu-translateX");
    el?.classList.remove("menu-visible");
    el?.classList.add("menu-translateX-right");
  }
}
