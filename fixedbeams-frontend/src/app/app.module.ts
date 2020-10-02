import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {SearchComponent} from "./components/search/search.component";
import {MainbarComponent} from "./components/shared/mainbar/mainbar.component";
import {NavbarComponent} from "./components/shared/navbar/navbar.component";
import {MatDialogComponent} from "./modals/mat-dialog/mat-dialog.component";
import {RouteBillComponent} from "./route/route-bill/route-bill.component";
import {CategoryCardComponent} from "./components/category-card/category-card.component";
import {NavbarItemComponent} from "./components/shared/navbar-item/navbar-item.component";
import {ProductCardsComponent} from "./components/product-cards/product-cards.component";
import {ProductComponent} from "./components/product/product.component";
import {FormBillComponent} from "./components/form-bill/form-bill.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {CategoryService} from "./services/category.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DomainService} from "./services/domain.service";
import {BillService} from "./services/bill.service";
import {BillDetailService} from "./services/bill-detail.service";
import { LoginComponent } from './components/login/login.component';
import {UserService} from "./services/user.service";
import { BuyComponent } from './components/buy/buy.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MainbarComponent,
    NavbarComponent,
    MatDialogComponent,
    RouteBillComponent,
    NavbarItemComponent,
    ProductCardsComponent,
    ProductComponent,
    CategoryCardComponent,
    NavbarItemComponent,
    ProductCardsComponent,
    ProductComponent,
    FormBillComponent,
    LoginComponent,
    BuyComponent,
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
    BillDetailService,
    UserService
  ],
  entryComponents: [
   MatDialogComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
