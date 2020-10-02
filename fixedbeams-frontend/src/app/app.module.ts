import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { MainbarComponent } from './components/shared/mainbar/mainbar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { MatDialogComponent } from './modals/mat-dialog/mat-dialog.component';
import {MatCardModule} from "@angular/material/card";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouteBillComponent } from './route/route-bill/route-bill.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryService } from './services/category.service';
import { DomainService } from './services/domain.service';
import { NavbarItemComponent } from './components/shared/navbar-item/navbar-item.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { ProductComponent } from './components/product/product.component';
import {BillService} from "./services/bill.service";
import { FormBillComponent } from './components/form-bill/form-bill.component';
import {BillDetailService} from "./services/bill-detail.service";
import {AppRoutingModule} from "./app-routing.module";
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MainbarComponent,
    NavbarComponent,
    MatDialogComponent,
    RouteBillComponent,
    CategoryCardComponent,
    NavbarItemComponent,
    ProductCardsComponent,
    ProductComponent,
    CategoryCardComponent,
    NavbarItemComponent,
    ProductCardsComponent,
    ProductComponent,
    FormBillComponent,
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
    FormsModule,
  ],
  providers: [
    CategoryService,
    DomainService,
    BillService,
    BillDetailService
  ],
  entryComponents: [
   MatDialogComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
