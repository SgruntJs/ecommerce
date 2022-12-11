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
      thumb: "/assets/images/card2.jpg", 
      title: "Offerte Lampo",
      seeMore: "Scopri di più",
      type: "deal"
    },
  ];


  constructor() {
    this.cards$ = of(this.cards);
  }

  
  

}
