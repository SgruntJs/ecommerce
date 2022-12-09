import { Component, Input, OnInit } from "@angular/core";
import { Slide } from "src/app/models/slide";
import { slideIn, slideOut, scaleIn, scaleOut } from "./carousel.animations";
import {
  trigger,
  transition,
  style,
  animate,
  useAnimation,
  state,
} from "@angular/animations";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX({{direction}}%)' }),
        animate('400ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(":leave", [
        animate("400ms ease-in", style({ transform: "translateX({{directionLeave}})" })),
      ]),
      
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides: Slide[] = [];
  direction = 'RL';
  directionLeave = 'RL';
  currentSlide = 0;

  constructor() {}

  ngOnInit() {
    this.preloadImages(); // for the demo
  }

  isOpen = true;

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.url;
    }
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
    this.isOpen = !this.isOpen;
    this.direction = 'RR';
    this.directionLeave = 'RR';
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
    this.isOpen = this.isOpen;
    this.direction = 'RL';
    this.directionLeave = 'RL';
  }
}
