import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedValue!: string;
  selectedCar!: string;


  categories: Category[] = [
    {value: 'alexa-skill', viewValue: 'Alexa Skill'},
    {value: 'saab', viewValue: 'Alimentari e cura della casa'},
    {value: 'amazon-warehouse', viewValue: 'Amazon Warehouse'},
    {value: 'film-tv', viewValue: 'Film e TV'},
  ];

  categories$ = of(this.categories);
}
