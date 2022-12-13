import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
//import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselModule } from './components/carousel/carousel.module';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SideNavContentComponent } from './components/side-nav-content/side-nav-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // CarouselComponent,
    HomeComponent,
    CardListComponent,
    CardComponent,
    SideNavComponent,
    SideNavContentComponent,
    FooterComponent,
    ProductCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
