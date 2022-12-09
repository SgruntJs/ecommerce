import { Component } from '@angular/core';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slides: Slide[] = [
    {
      url: "/assets/images/banner1.jpg", title: "banner 1"
    },
    {
      url: "/assets/images/banner2.jpg", title: "banner 2"
    },
    {
      url: "/assets/images/banner3.jpg", title: "banner 3"
    },
    {
      url: "/assets/images/banner4.jpg", title: "banner 4"
    },
  ]

}
