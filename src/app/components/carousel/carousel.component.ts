import { Component, Input, OnInit } from "@angular/core";
import { Slide } from "src/app/models/slide";
import { slideIn, slideOut, scaleIn, scaleOut } from "./carousel.animations";
import {
  trigger,
  transition,
  style,
  animate,
  useAnimation,
} from "@angular/animations";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
     trigger("carouselAnimation", [
    //   transition("void => *", [useAnimation(slideIn, {params: { time: '1300ms' }} )]),
    //   transition("* => void", [useAnimation(slideOut, {params: { time: '1300ms' }})]),
    // ]
    transition(":enter", [
      style({ transform: "translateX(-100%)" }),
      animate("500ms ease-in", style({ transform: "translateX(0%)" })),
    ]),
    transition(":leave", [
      animate("500ms ease-in", style({ transform: "translateX(100%)" })),
    ]),
  ],
     )]
})
export class CarouselComponent implements OnInit {
  @Input() slides: Slide[] = [];

  currentSlide = 0;

  constructor() {}

  ngOnInit() {
    this.preloadImages(); // for the demo
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.url;
    }
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
