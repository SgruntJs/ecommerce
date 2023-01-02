import { Component, ElementRef, ViewChild } from "@angular/core";
import { filter, map, of, switchMap, toArray } from "rxjs";
import { Category } from "src/app/models/category.model";
import { Navigation } from "src/app/models/navigation.model";
import { NavigationService } from "src/app/services/navigation/navigation.service";
import { NAVIGATION } from "./navigation";
import { Observable } from 'rxjs';
import { AddressFormComponent } from "../address-form/address-form.component";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { DataService } from "src/app/services/data/data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {

  lang = '.it';// dovrebbe cambiare a seconda della nazione

  navigationLinks = NAVIGATION;
  navigationLinks$!: Observable<Navigation[]>;
  //change after select address
  locaObj: any;
  placeholderText = 'Ricerca Amazon.it';


  constructor(private navService: NavigationService,private bottomSheet: MatBottomSheet,private dataService: DataService) {
    this.navigationLinks$ = of(this.navigationLinks);
   }


   openBottomSheet(): void {
    this.bottomSheet.open(AddressFormComponent);
  }

  ngOnInit(): void {
    this.getNewObj();
  }


  toggleSideNav() {
    this.navService.setShowNav(true);
  }

  categories: Category[] = [
    { value: "alexa-skill", viewValue: "Alexa Skill" },
    { value: "alimentari", viewValue: "Alimentari e cura della casa" },
    { value: "amazon-warehouse", viewValue: "Amazon Warehouse" },
    { value: "film-tv", viewValue: "Film e TV" },
    { value: "auto-moto", viewValue: "Auto e Moto - Parti e Accessori" },
  ];

  categories$ = of(this.categories);

  getNewObj() {
    this.dataService.dataObj.subscribe((res) => {
      console.log("res new", res);
      this.locaObj = res;
    });
  }
  
}
