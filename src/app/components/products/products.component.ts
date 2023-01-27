import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { filter, Observable, switchMap, toArray } from "rxjs";
import { ProductsService } from "src/app/services/products/products.service";
import { Product } from "./product";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}
  query = "";

  products$!: Observable<Product[]>;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.query = params["q"];
    });

    console.log("query", this.query);
    this.getQueryProduct();
  }

  getQueryProduct(){
    this.products$ = this.productsService.getProducts()
    .pipe(
      switchMap( (product) => product),
      filter( p => p.name.toLowerCase().indexOf(this.query) != -1),
      toArray()
    )
  }
}
