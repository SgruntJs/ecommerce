import { Component, Input, OnInit, HostListener, AfterViewInit, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";
import { Slide } from "src/app/models/slide";
@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent implements OnInit, AfterViewInit {
  @Input() title!: string;
  @Input() slides: Slide[] = [];

  @ViewChild('button') button!: ElementRef;
  buttonSubscription = new Subscription;
  buttonSubscription2 = new Subscription;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.preloadImages(); // for the demo
    
  }

  ngAfterViewInit() {
    this.buttonClickPrev();
    this.buttonClickNext();
  }

  slideConfig = { slidesToShow:7, slidesToScroll: 6, infinite: false};
 
 
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

  buttonClickPrev() {
    const btnPrev = this.button.nativeElement.parentNode.parentElement.previousElementSibling;
    const lastSlide = this.button.nativeElement.parentElement;
    const btnNext = this.button.nativeElement.parentNode.parentElement.nextElementSibling;
    
    console.log(btnNext);
     
      this.buttonSubscription = fromEvent(btnPrev, 'click')
      .subscribe( (res: any) => {
        console.log('ciao', res.target);
        if(res.target.classList.contains('slick-disabled')) {
            console.log('bomba');
            this.renderer.addClass(lastSlide, 'bounce-prev')
            setTimeout(() => {
              lastSlide.classList.remove('bounce-prev');
            }, 500)
        }
      })
    
  }
  buttonClickNext() {

    const lastSlide = this.button.nativeElement.parentElement;
    const btnNext = this.button.nativeElement.parentNode.parentElement.nextElementSibling;
    console.log('next', lastSlide)
    this.buttonSubscription2 = fromEvent(btnNext, 'click')
      .subscribe( (res: any) => {
        console.log('ciao', res.target);
        if(res.target.classList.contains('slick-disabled')) {
            console.log('bomba');
            this.renderer.addClass(lastSlide, 'bounce-next')
            setTimeout(() => {
              lastSlide.classList.remove('bounce-next');
            }, 500)
        }
      })
    
  }

 
}
