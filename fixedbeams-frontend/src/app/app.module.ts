import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { MainbarComponent } from './components/shared/mainbar/mainbar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryService } from './services/category.service';
import { DomainService } from './services/domain.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarItemComponent } from './components/shared/navbar-item/navbar-item.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MainbarComponent,
    NavbarComponent,
    CategoryCardComponent,
    NavbarItemComponent,
    ProductCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CategoryService,
    DomainService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
