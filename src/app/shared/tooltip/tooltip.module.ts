import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipComponent} from './tooltip.component';
import {TooltipDirective} from './tooltip.directive';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TooltipComponent,
    TooltipDirective
  ],
  imports: [
    CommonModule, MatIconModule
  ],
  exports: [TooltipDirective]
})
export class TooltipModule {
}
