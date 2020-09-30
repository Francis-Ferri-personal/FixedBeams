import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainbarComponent} from "./components/shared/mainbar/mainbar.component";
import {CarComponent} from "./components/car/car.component";
import {HomeComponent} from "./components/home/home.component";
import {RouteBillComponent} from "./route/route-bill/route-bill.component";
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
