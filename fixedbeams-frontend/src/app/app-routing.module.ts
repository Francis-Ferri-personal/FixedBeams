import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainbarComponent} from "./components/shared/mainbar/mainbar.component";
import {CarComponent} from "./components/car/car.component";
import {HomeComponent} from "./components/home/home.component";
import {RouteBillComponent} from "./route/route-bill/route-bill.component";
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { ProductComponent } from './components/product/product.component';
const routes: Routes = [
  {
    component: HomeComponent,
    path: 'inicio'
  },
  {
    component: CarComponent,
    path: 'car'
  },
  {
    component: RouteBillComponent,
    path: 'bill'
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: "domain/:id",
    component: CategoryCardComponent
  },
  {
    path: "category/:id",
    component: ProductCardsComponent
  },
  {
    path: "product/:id",
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
