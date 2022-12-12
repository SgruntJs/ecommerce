import { Component } from "@angular/core";
import { of } from "rxjs";
import { Category } from "src/app/models/category";
import { NavigationService } from "src/app/services/navigation/navigation.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  selectedValue!: string;
  selectedCar!: string;
  selectFocusClass = false;

  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.navService.setShowNav(true);
  }

  categories: Category[] = [
    { value: "alexa-skill", viewValue: "Alexa Skill" },
    { value: "saab", viewValue: "Alimentari e cura della casa" },
    { value: "amazon-warehouse", viewValue: "Amazon Warehouse" },
    { value: "film-tv", viewValue: "Film e TV" },
    { value: "auto-moto", viewValue: "Auto e Moto - Parti e Accessori" },
  ];

  categories$ = of(this.categories);
}
