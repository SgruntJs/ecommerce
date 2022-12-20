import { Component } from '@angular/core';
export interface Options {
  value: string;
  isActive?: boolean;
  }
@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {

  optionsList1: Options[] = [
    {
      value:
        "Francia",
    },
    {
      value:
        "Svizzera",
    },
    { value: 'Cina' },
    { value: 'Germania' },
    { value: 'Regno Unito' },
    { value: 'Stati Uniti' },
    { value: 'Afghanistan' },
    { value: 'Albania' },
    { value: 'Algeria' },
    { value: 'Croazia' },
    { value: 'Grecia' },
    { value: 'Grecia' },
    { value: 'Grecia' },
    { value: 'Grecia' },
    { value: 'Grecia' },
    { value: 'Grecia' },
    { value: 'Egitto' },
    { value: 'Grecia' },
    { value: 'Cina' },
    { value: 'Germania' },
    { value: 'Regno Unito' },
    { value: 'Stati Uniti' },
    { value: 'Afghanistan' },
    { value: 'Albania' },
    { value: 'Algeria' },
    { value: 'Croazia' },
    { value: 'Grecia' },
    { value: 'Grecia' },
    { value: 'Grecia' },
    { value: 'Grecia' },
    { value: 'Grecia' },
    { value: 'Grecia' },
    { value: 'Grecia' },
    { value: 'Grecia' },
    { value: 'Romania' },
    { value: 'Bulgaria' },
  ];

}
