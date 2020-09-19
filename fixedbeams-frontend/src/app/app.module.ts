import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './components/home/home.component';
import { MainbarComponent } from './components/shared/mainbar/mainbar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarComponent } from './components/car/car.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainbarComponent,
    NavbarComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
