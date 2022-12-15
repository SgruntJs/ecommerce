import { Component } from "@angular/core";
import { of } from "rxjs";
import { Category } from "src/app/models/category.model";
import { Navigation } from "src/app/models/navigation.model";
import { NavigationService } from "src/app/services/navigation/navigation.service";
import { NAVIGATION } from "./navigation";
import { Observable } from 'rxjs';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {

  lang = '.it';// dovrebbe cambiare a seconda della nazione
  selectedValue!: string;
  selectedCar!: string;
  selectFocusClass = false;
  navigationLinks = NAVIGATION;
  navigationLinks$!: Observable<Navigation[]>;

  constructor(private navService: NavigationService) {
    this.navigationLinks$ = of(this.navigationLinks);
   }



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
