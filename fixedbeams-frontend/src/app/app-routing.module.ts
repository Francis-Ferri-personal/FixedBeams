import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainbarComponent} from "./components/shared/mainbar/mainbar.component";
import {CarComponent} from "./components/car/car.component";
import {RouteBillComponent} from "./route/route-bill/route-bill.component";
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { ProductComponent } from './components/product/product.component';
import {SearchComponent} from "./components/search/search.component";
const routes: Routes = [
  {
    component: CarComponent,
    path: 'car'
  },
  {
    component: RouteBillComponent,
    path: 'bill'
  },
  {path: '', component: SearchComponent},
  {path: 'domain/:id', component: CategoryCardComponent},
  {path: 'category/:id', component: ProductCardsComponent},
  {path: 'product/:id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
