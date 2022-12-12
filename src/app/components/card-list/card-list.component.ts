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
    }
  ];


  constructor() {
    this.cards$ = of(this.cards);
  }

  
  

}
