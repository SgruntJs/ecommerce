import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { filter, Observable, of, switchMap, toArray } from 'rxjs';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  selectedCar!: string;
  selectFocusClass = false;
  selectFocusInputClass = false;
  selectedValue!: string;

  @ViewChild('select') select!: ElementRef;
  selectWidth = "145px";

  @Input() categories!: Category[];
  categories$!: Observable<Category[]>

  @Input() placeholder!: string;

  constructor() { }

  ngOnInit() {
    this.categories$ = of(this.categories);
    console.log(this.categories)
  }

  changeWidth(value: any): void {
    const selectedValue = value.value;
    console.log(selectedValue);
    var text;
    this.categories$.pipe( 
      switchMap( res => res),
      filter( item => item.value === selectedValue),
      toArray()
    ).subscribe( x => {
      text = x[0].viewValue;
      this.selectWidth = (text.length * 7.5) + 40 + 'px';
      console.log('text',text);
    })
  }

  onKeydown(e: any) {
    console.log('keydown', e.target?.value)
  }

}
