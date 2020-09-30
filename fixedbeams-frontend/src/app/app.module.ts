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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { MatDialogComponent } from './modals/mat-dialog/mat-dialog.component';
import {MatCardModule} from "@angular/material/card";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouteBillComponent } from './route/route-bill/route-bill.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainbarComponent,
    NavbarComponent,
    CarComponent,
    MatDialogComponent,
    RouteBillComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    NgbModule,
  ],
  providers: [],
  entryComponents: [
   MatDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
