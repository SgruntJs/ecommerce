import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  cards$!: Observable<Card[]>;
  cards: Card[] = [
    {
      id: "1",
      thumb: "/assets/images/card1.jpg", 
      title: "Buoni Regalo di Natale",
      seeMore: "Scopri di più",
      type: "deal"
    },
    {
      id: "2",
      thumb: "https://images-eu.ssl-images-amazon.com/images/G/29/GiftCards/Consumer/multi-product/HOL22/Christmas22_Card_GC_379x304_1x._SY304_CB620002760_.png", 
      title: "Offerte Lampo",
      seeMore: "Scopri di più",
      type: "deal"
    },
    {
      id: "3",
      thumb: "/assets/images/card2.jpg", 
      title: "Giochi",
      seeMore: "Scopri di più",
      type: "deal"
    },
    {
      id: "4",
      thumb: "https://images-eu.ssl-images-amazon.com/images/G/29/ASBA/SIC_Flexible_Desktop__Cat_Card_Lifestyle_ES_Pradorey_51x._SY304_CB610884861_.jpg", 
      title: "Aiutiamo le imprese a crescere",
      seeMore: "Scopri di più",
      type: "deal"
    },
    {
      id: "5",
      thumb: "https://images-eu.ssl-images-amazon.com/images/G/29/Events/2022/Xmas/Homepage/XCM_CUTTLE_1488286_2673650_758x608_2X_it_IT._SY608_CB607948390_.jpg", 
      title: "Regali di Natale per tutti",
      seeMore: "Scopri il Negozio di Natale",
      type: "deal"
    },
    {
      id: "6",
      thumb: "https://images-eu.ssl-images-amazon.com/images/G/29/Events/2022/Xmas/Homepage/XCM_CUTTLE_1488286_2673650_758x608_2X_it_IT._SY608_CB607948390_.jpg", 
      title: "Regali di Natale per tutti",
      seeMore: "Scopri il Negozio di Natale",
      type: "deal"
    },
    {
      id: "7",
      thumb: "https://images-eu.ssl-images-amazon.com/images/G/29/Renewed/Desktop_758x608_2X._SY608_CB605045903_.jpg", 
      title: "Prodotti ricondizionati : meglio per il pianeta",
      seeMore: "Scopri il Negozio di Natale",
      type: "deal"
    },
    {
      id: "8",
      thumb: "https://images-eu.ssl-images-amazon.com/images/G/29/Events/2022/Xmas/Homepage/XCM_CUTTLE_1488286_2673650_758x608_2X_it_IT._SY608_CB607948390_.jpg", 
      title: "Regali di Natale per tutti",
      seeMore: "Scopri il Negozio di Natale",
      type: "deal"
    },
  ];


  constructor() {
    this.cards$ = of(this.cards);
  }

  
  

}
