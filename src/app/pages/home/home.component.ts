import { Component } from "@angular/core";
import { Slide } from "src/app/models/slide";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  slides: Slide[] = [
    {
      url: "/assets/images/banner1.jpg",
      title: "banner 1",
    },
    {
      url: "/assets/images/banner2.jpg",
      title: "banner 2",
    },
    {
      url: "/assets/images/banner3.jpg",
      title: "banner 3",
    },
    {
      url: "/assets/images/banner4.jpg",
      title: "banner 4",
    },
  ];
  products: Slide[] = [
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-0e892f00-a55e-4e43-a22a-317139b84cd2mediaCentralImage2_it_IT_69968bbf7cfa425f80d17259a6e68b21._CB604369537_.png",
      title: "banner 1",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-0e892f00-a55e-4e43-a22a-317139b84cd2mediaCentralImage2_it_IT_69968bbf7cfa425f80d17259a6e68b21._CB604369537_.png",
      title: "banner 2",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-e4c8a514-dee7-49af-8aa5-206d59920209mediaCentralImage2_it_IT_96beecef85824e268ea48e15e18d1803._CB604372337_.png",
      title: "banner 3",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-4b07f026-b1f9-4a64-8b59-5e47924a37a8mediaCentralImage2_it_IT_fe1b2cfe88cd4ac8a1c8f865b56e1cb1._CB604420172_.png",
      title: "banner 4",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-0e892f00-a55e-4e43-a22a-317139b84cd2mediaCentralImage2_it_IT_69968bbf7cfa425f80d17259a6e68b21._CB604369537_.png",
      title: "banner 1",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-0e892f00-a55e-4e43-a22a-317139b84cd2mediaCentralImage2_it_IT_69968bbf7cfa425f80d17259a6e68b21._CB604369537_.png",
      title: "banner 2",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-e4c8a514-dee7-49af-8aa5-206d59920209mediaCentralImage2_it_IT_96beecef85824e268ea48e15e18d1803._CB604372337_.png",
      title: "banner 3",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-4b07f026-b1f9-4a64-8b59-5e47924a37a8mediaCentralImage2_it_IT_fe1b2cfe88cd4ac8a1c8f865b56e1cb1._CB604420172_.png",
      title: "banner 4",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-0e892f00-a55e-4e43-a22a-317139b84cd2mediaCentralImage2_it_IT_69968bbf7cfa425f80d17259a6e68b21._CB604369537_.png",
      title: "banner 1",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-0e892f00-a55e-4e43-a22a-317139b84cd2mediaCentralImage2_it_IT_69968bbf7cfa425f80d17259a6e68b21._CB604369537_.png",
      title: "banner 2",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-e4c8a514-dee7-49af-8aa5-206d59920209mediaCentralImage2_it_IT_96beecef85824e268ea48e15e18d1803._CB604372337_.png",
      title: "banner 3",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/29/Babel/9b5a094c-2ca5-4181-9911-5d2597e65cf2/IT_Gateway-Homepage_DayOf_Desktop/desktop-top_0_BubblerShovelerCompetingDefault_stores-4b07f026-b1f9-4a64-8b59-5e47924a37a8mediaCentralImage2_it_IT_fe1b2cfe88cd4ac8a1c8f865b56e1cb1._CB604420172_.png",
      title: "banner 4",
    },
  ];

  luxury: Slide[] = [
    {
      url: "https://www.amazon.it/Kerastase-Resistance-Architecte-riparatore-danneggiati/dp/B01KNWRJYY/?_encoding=UTF8&pd_rd_w=3Wptt&content-id=amzn1.sym.39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_p=39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_r=EMYF5DPHJT43F53EJAP8&pd_rd_wg=5jiWq&pd_rd_r=b70bcfa0-af57-462a-a9e2-0df2f6b754fd&ref_=pd_gw_unk",
      title: "kerastase",
    },
    {
      url: "https://www.amazon.it/Kerastase-Chroma-Absolu-Respect-Shampoo/dp/B09QGN33G1/?_encoding=UTF8&pd_rd_w=3Wptt&content-id=amzn1.sym.39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_p=39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_r=EMYF5DPHJT43F53EJAP8&pd_rd_wg=5jiWq&pd_rd_r=b70bcfa0-af57-462a-a9e2-0df2f6b754fd&ref_=pd_gw_unk",
      title: "kerastase",
    },
    {
      url: "https://www.amazon.it/Kerastase-Trattamento-Capelli-200-ml/dp/B01KWR8VVU/?_encoding=UTF8&pd_rd_w=3Wptt&content-id=amzn1.sym.39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_p=39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_r=EMYF5DPHJT43F53EJAP8&pd_rd_wg=5jiWq&pd_rd_r=b70bcfa0-af57-462a-a9e2-0df2f6b754fd&ref_=pd_gw_unk",
      title: "kerastase 3"
    },
    {
      url: "https://www.amazon.it/Kerastase-Resistance-Architecte-riparatore-danneggiati/dp/B01KNWRJYY/?_encoding=UTF8&pd_rd_w=3Wptt&content-id=amzn1.sym.39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_p=39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_r=EMYF5DPHJT43F53EJAP8&pd_rd_wg=5jiWq&pd_rd_r=b70bcfa0-af57-462a-a9e2-0df2f6b754fd&ref_=pd_gw_unk",
      title: "kerastase",
    },
    {
      url: "https://www.amazon.it/Kerastase-Chroma-Absolu-Respect-Shampoo/dp/B09QGN33G1/?_encoding=UTF8&pd_rd_w=3Wptt&content-id=amzn1.sym.39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_p=39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_r=EMYF5DPHJT43F53EJAP8&pd_rd_wg=5jiWq&pd_rd_r=b70bcfa0-af57-462a-a9e2-0df2f6b754fd&ref_=pd_gw_unk",
      title: "kerastase",
    },
    {
      url: "https://www.amazon.it/Kerastase-Trattamento-Capelli-200-ml/dp/B01KWR8VVU/?_encoding=UTF8&pd_rd_w=3Wptt&content-id=amzn1.sym.39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_p=39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_r=EMYF5DPHJT43F53EJAP8&pd_rd_wg=5jiWq&pd_rd_r=b70bcfa0-af57-462a-a9e2-0df2f6b754fd&ref_=pd_gw_unk",
      title: "kerastase 3"
    },
    {
      url: "https://www.amazon.it/Kerastase-Resistance-Architecte-riparatore-danneggiati/dp/B01KNWRJYY/?_encoding=UTF8&pd_rd_w=3Wptt&content-id=amzn1.sym.39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_p=39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_r=EMYF5DPHJT43F53EJAP8&pd_rd_wg=5jiWq&pd_rd_r=b70bcfa0-af57-462a-a9e2-0df2f6b754fd&ref_=pd_gw_unk",
      title: "kerastase",
    },
    {
      url: "https://www.amazon.it/Kerastase-Chroma-Absolu-Respect-Shampoo/dp/B09QGN33G1/?_encoding=UTF8&pd_rd_w=3Wptt&content-id=amzn1.sym.39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_p=39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_r=EMYF5DPHJT43F53EJAP8&pd_rd_wg=5jiWq&pd_rd_r=b70bcfa0-af57-462a-a9e2-0df2f6b754fd&ref_=pd_gw_unk",
      title: "kerastase",
    },
    {
      url: "https://www.amazon.it/Kerastase-Trattamento-Capelli-200-ml/dp/B01KWR8VVU/?_encoding=UTF8&pd_rd_w=3Wptt&content-id=amzn1.sym.39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_p=39a22cac-f46b-45dd-bc4d-2d2bf131702e&pf_rd_r=EMYF5DPHJT43F53EJAP8&pd_rd_wg=5jiWq&pd_rd_r=b70bcfa0-af57-462a-a9e2-0df2f6b754fd&ref_=pd_gw_unk",
      title: "kerastase 8"
    },
  ];
}
