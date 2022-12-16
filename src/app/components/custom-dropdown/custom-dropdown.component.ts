import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


export interface Options {
  value: string;
  isActive?: boolean;
  }

@Component({
  selector: 'custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
})
export class CustomDropdownComponent implements OnInit {
  constructor() {}


  public testForm!: NgForm;
  public isDropDownOpen: boolean = false;
  public dropdown: string = "Spedisci all'estero";

  @Input('options') options!: Options[];

  ngOnInit() {
    this.options.forEach((opt) => {
      opt.isActive = false;
    });
    this.options.splice(0, 0, { value: '', isActive: true });
  }

  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  updateControl(data: any) {
    this.dropdown = data;
  }
}