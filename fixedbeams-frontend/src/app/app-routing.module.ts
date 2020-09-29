import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';

export const routes: Routes = [
    {path: "", component: SearchComponent},
    {path: "domain/:id",component: CategoryCardComponent},
    {path: "category/:id", component: ProductCardsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { } 