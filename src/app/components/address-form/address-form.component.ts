import { Component } from "@angular/core";
import { OPTIONS } from "./options";
export interface Options {
  value: string;
  isActive?: boolean;
  selected?: boolean;
  common?: boolean;
}
@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.scss"],
})
export class AddressFormComponent {
  isVisible = false;

  constructor() {}

  optionsList1: Options[] = OPTIONS;

  showForeignSelection() {
    this.isVisible = !this.isVisible;
  }

  show(back: boolean) {
    this.isVisible = back;
  }
}
