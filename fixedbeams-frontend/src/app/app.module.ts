import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MainbarComponent } from './components/shared/mainbar/mainbar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryService } from './services/category.service';
import { DomainService } from './services/domain.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainbarComponent,
    NavbarComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule,
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
