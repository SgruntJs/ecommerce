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
  ];
  products: Slide[] = [
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-0e892f00-a55e-4e43-a22a-317139b84cd2mediaCentralImage2_it_IT_69968bbf7cfa425f80d17259a6e68b21._CB604369537_.png", title: "banner 1"
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-0e892f00-a55e-4e43-a22a-317139b84cd2mediaCentralImage2_it_IT_69968bbf7cfa425f80d17259a6e68b21._CB604369537_.png", title: "banner 2"
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-e4c8a514-dee7-49af-8aa5-206d59920209mediaCentralImage2_it_IT_96beecef85824e268ea48e15e18d1803._CB604372337_.png", title: "banner 3"
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-4b07f026-b1f9-4a64-8b59-5e47924a37a8mediaCentralImage2_it_IT_fe1b2cfe88cd4ac8a1c8f865b56e1cb1._CB604420172_.png", title: "banner 4"
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-0e892f00-a55e-4e43-a22a-317139b84cd2mediaCentralImage2_it_IT_69968bbf7cfa425f80d17259a6e68b21._CB604369537_.png", title: "banner 1"
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-0e892f00-a55e-4e43-a22a-317139b84cd2mediaCentralImage2_it_IT_69968bbf7cfa425f80d17259a6e68b21._CB604369537_.png", title: "banner 2"
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-e4c8a514-dee7-49af-8aa5-206d59920209mediaCentralImage2_it_IT_96beecef85824e268ea48e15e18d1803._CB604372337_.png", title: "banner 3"
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-4b07f026-b1f9-4a64-8b59-5e47924a37a8mediaCentralImage2_it_IT_fe1b2cfe88cd4ac8a1c8f865b56e1cb1._CB604420172_.png", title: "banner 4"
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-0e892f00-a55e-4e43-a22a-317139b84cd2mediaCentralImage2_it_IT_69968bbf7cfa425f80d17259a6e68b21._CB604369537_.png", title: "banner 1"
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-0e892f00-a55e-4e43-a22a-317139b84cd2mediaCentralImage2_it_IT_69968bbf7cfa425f80d17259a6e68b21._CB604369537_.png", title: "banner 2"
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-e4c8a514-dee7-49af-8aa5-206d59920209mediaCentralImage2_it_IT_96beecef85824e268ea48e15e18d1803._CB604372337_.png", title: "banner 3"
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-4b07f026-b1f9-4a64-8b59-5e47924a37a8mediaCentralImage2_it_IT_fe1b2cfe88cd4ac8a1c8f865b56e1cb1._CB604420172_.png", title: "banner 4"
    },
  ];

}
