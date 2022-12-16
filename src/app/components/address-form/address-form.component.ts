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
  ];

}
