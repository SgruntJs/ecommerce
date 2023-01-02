import { Component } from "@angular/core";
import { Slide } from "src/app/models/slide";
import { IMAGES } from "./imagesSlide";
import { LUXURY } from "./luxury";
import { PRODUCTS } from "./products";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  slides: Slide[] = IMAGES;
  products: Slide[] = PRODUCTS;

  luxury: Slide[] = LUXURY;
}


//https://stackoverflow.com/questions/59366833/why-vs-code-contains-emphasized-items-but-no-error