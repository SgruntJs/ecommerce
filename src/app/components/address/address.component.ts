import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DataService } from "src/app/services/data/data.service";
import { AddressFormComponent } from "../address-form/address-form.component";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"],
})
export class AddressComponent implements OnInit {

  location = "";
  locaObj: any;
  constructor(public dialog: MatDialog, private dataService: DataService) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddressFormComponent);
    

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
    this.getNewObj();
    this.getData();
  }

  getData() {
    this.dataService.data.subscribe((response) => {
      console.log("res", response);
      this.location = response; // you will receive the data from sender component here.

    });
  }

  getNewObj() {
    this.dataService.dataObj.subscribe((res) => {
      console.log("res1", res);
      this.locaObj = res;
      this.dialog.closeAll();
    });
  }
}
