import { Component, Input } from "@angular/core";
import { Slide } from "src/app/models/slide";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent {
  @Input() slides: Slide[] = [];

  currentIndex: number = 0;

  getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  goToNext():void {
    const isLastSlide = this.currentIndex === this.slides.length -1;
    const newIndex = isLastSlide ? 0 : this.currentIndex +1;
    this.currentIndex = newIndex;
  }

  goToPrevious():void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }
}
