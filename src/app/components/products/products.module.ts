import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { PopoverDirective } from 'src/app/shared/popover/popover.directive';
import { TooltipModule } from 'src/app/shared/tooltip/tooltip.module';
import { Tooltip2Directive } from 'src/app/shared/tooltip2/tooltip2.directive';
import { PopoverComponent } from 'src/app/shared/popover/popover.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    PopoverDirective, 
    Tooltip2Directive,
    PopoverComponent,
  ],
  imports: [
    CommonModule, ProductsRoutingModule, TooltipModule,  MatIconModule,
  ],
    
    exports: [PopoverDirective,TooltipModule, Tooltip2Directive, PopoverComponent],
})
export class ProductsModule { }
