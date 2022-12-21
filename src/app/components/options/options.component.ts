import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-options",
  templateUrl: "./options.component.html",
  styleUrls: ["./options.component.scss"],
})
export class OptionsComponent {
  @Output() backEvent = new EventEmitter<boolean>();

  onBack() {
    this.backEvent.emit(false);
  }
}
