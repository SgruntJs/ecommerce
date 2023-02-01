import { Component, HostListener, Input } from '@angular/core';
import { TooltipPosition, TooltipTheme } from 'src/app/shared/tooltip/tooltip.enums';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: Product;

  tooltipText = 'Questo annuncio viene visualizzato in base alla pertinenza del prodotto con la query di ricerca.'
  tooltipTextLink = 'Inviaci i tuoi commenti';

  TooltipPosition: typeof TooltipPosition = TooltipPosition;
  x = 0;
  y = 0;
  coordinates = "";

  below = TooltipPosition.BELOW;
  top = TooltipPosition.DEFAULT;
  light = TooltipTheme.LIGHT;

  @HostListener('mousemove', ['$event'])
  onMouseMove($event: MouseEvent): void {
      this.x = $event.clientX;
      this.y = $event.clientY;
      this.coordinates = `${this.x},${this.y}`;
  }
}
