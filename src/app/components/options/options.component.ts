import { Component, EventEmitter, Input, Output } from "@angular/core";
import { filter, Observable, of, switchMap, toArray } from "rxjs";
import { DataService } from "src/app/services/data/data.service";

export interface Option {
  value: string;
  isActive?: boolean;
  selected?: boolean;
  common?: boolean;
}

@Component({
  selector: "app-options",
  templateUrl: "./options.component.html",
  styleUrls: ["./options.component.scss"],
})
export class OptionsComponent {
  @Output() backEvent = new EventEmitter<boolean>();

  favoriteSeason!: string;
  seasons: string[] = ["Winter", "Spring", "Summer", "Autumn"];
  @Input("optionsList") optionsList!: Option[];

  options$!: Observable<Option[]>;
  rest$!: Observable<Option[]>;
  commons$!: Observable<Option[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.options$ = of(this.optionsList);
    console.log(this.optionsList);
    this.getCommon();
    this.getRest();
  }

  onBack() {
    this.backEvent.emit(false);
  }

  getCommon() {
    this.commons$ = this.options$.pipe(
      switchMap((opt) => opt),
      filter((res) => res.common == true),
      toArray()
    );
  }

  getRest() {
    this.rest$ = this.options$.pipe(
      switchMap((opt) => opt),
      filter((res) => res.common == false),
      toArray()
    );
  }
  selectOption(evt: any, optionIndex: number) {
    const el = evt.value;
    console.log("change el", el);
    this.sendObject({ text: "il tuo indirizzo di consegna", value: el });
  }

  //update address
  sendObject(data: any) {
    this.dataService.sendObjData(data);
  }
}
