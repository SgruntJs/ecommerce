import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from "@angular/core";
import { fromEvent, skip, Subscription } from "rxjs";
import { Slide } from "src/app/models/slide";
@Component({
  selector: "app-product-carousel",
  templateUrl: "./product-carousel.component.html",
  styleUrls: ["./product-carousel.component.scss"],
})
export class ProductCarouselComponent implements OnInit, AfterViewInit {
  @Input() title!: string;
  @Input() slides: Slide[] = [];

  @ViewChild("button") button!: ElementRef;
  buttonSubscription = new Subscription();
  buttonSubscription2 = new Subscription();
  @Input() variableWidth = false;
  @Input() slidesToShow = 7;
  @Input() slidesToScroll = 6;
  slideConfig = {};

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.preloadImages(); // for the demo
    console.log('slider', this.slidesToShow)
  }

  ngAfterViewInit() {
    this.buttonClickPrev();
    this.buttonClickNext();
    this.slideConfig = {
      slidesToShow: this.slidesToShow,
      slidesToScroll: this.slidesToScroll,
      infinite: false,
      adaptiveHeight: true,
      variableWidth: this.variableWidth,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 728,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }





  

  slickInit(e: any) {
    console.log("slick initialized");
  }
  breakpoint(e: any) {
    console.log("breakpoint");
  }
  afterChange(e: any) {
    console.log("afterChange");
    this.slideConfig;
    console.log(this.slideConfig);
  }
  beforeChange(e: any) {
    console.log("beforeChange");
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.url;
    }
  }

  buttonClickPrev() {
    const btnPrev =
      this.button.nativeElement.parentNode.parentElement.previousElementSibling;
    const lastSlide = this.button.nativeElement.parentElement;
    const btnNext =
      this.button.nativeElement.parentNode.parentElement.nextElementSibling;

    this.buttonSubscription = fromEvent(btnPrev, "click")
      .pipe(skip(1))
      .subscribe((res: any) => {
        if (res.target.classList.contains("slick-disabled")) {
          this.renderer.addClass(lastSlide, "bounce-prev");
          setTimeout(() => {
            lastSlide.classList.remove("bounce-prev");
          }, 500);
        }
      });
  }
  buttonClickNext() {
    const lastSlide = this.button.nativeElement.parentElement;
    const btnNext =
      this.button.nativeElement.parentNode.parentElement.nextElementSibling;
    this.buttonSubscription2 = fromEvent(btnNext, "click")
      .pipe(skip(1))
      .subscribe((res: any) => {
        if (res.target.classList.contains("slick-disabled")) {
          this.renderer.addClass(lastSlide, "bounce-next");
          setTimeout(() => {
            lastSlide.classList.remove("bounce-next");
          }, 500);
        }
      });
  }
}
