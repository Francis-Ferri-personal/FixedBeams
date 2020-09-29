import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from 'src/app/models/cotegory.model';
import { Product } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  categoryName: string;
  categoryProducts: Product[];

  modalVisible: boolean;

  constructor(
    private readonly _categoryService: CategoryService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) {
    this.categoryName = "";
    this.categoryProducts = [];
    this.modalVisible = false;
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => {
        const id = Number(parametros.id);
        if(id != NaN){
          this.getCategory(id);
          this.getCategoryProducts(id);
        }
      }
    )
  }

  ngOnInit(): void {
  
  }

  getCategory(id: number){
    const obsCategory =  this._categoryService.getCategory(id);
    obsCategory.subscribe(
      (category: Category) => {
        this.categoryName = category.name;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getCategoryProducts(id: number){
    const obsProducts = this._categoryService.getCategoryProducts(id);
    obsProducts.subscribe(
      (productos: Product[]) => {
        this.categoryProducts = productos;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  mostrarModal(){
    this.modalVisible = true;
  }

  irAProducto(product: Product){
    const url = ["/product", product.id];
    this._router.navigate(url);
  }

  

}
