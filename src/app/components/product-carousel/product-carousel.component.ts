import { Component, Input, OnInit } from "@angular/core";
import { Slide } from "src/app/models/slide";

import {
  trigger,
  transition,
  style,
  animate,
  state,
} from "@angular/animations";

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX({{direction}}%)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition(":leave", [
        animate("300ms ease-in-out", style({ transform: "translateX({{directionLeave}}%)" })),
      ]),
      
    ])
  ]
})
export class ProductCarouselComponent implements OnInit {
  @Input() title!: string;
  @Input() slides: Slide[] = [];
  direction = '0';
  directionLeave = '0';
  currentSlide = 0;

  constructor() {}

  ngOnInit() {
    this.preloadImages(); // for the demo
    console.log(this.slides);
  }

  
  slideConfig = { slidesToShow:7, slidesToScroll: 6, infinite: false};
  addSlide() {
    
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
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
  
    this.direction = '-100';
    this.directionLeave = '100';
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
 
    this.direction = '100';
    this.directionLeave = '-100';
  }
}
