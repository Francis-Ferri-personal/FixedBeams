import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from 'src/app/models/cotegory.model';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  titulo: string;
  productos: Product[];

  modalVisible: boolean;

  constructor(
    private readonly _categoryService: CategoryService,
    private readonly _productService: ProductService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) {
    this.titulo = "";
    this.productos = [];
    this.modalVisible = false;
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => {
        const id = Number(parametros.id);
        if(!Number.isNaN(id)){
          this.getCategory(id);
          this.getCategoryProducts(id);
        } else {
          const obsQuery = this._activatedRoute.queryParams;
          obsQuery.subscribe(
            (queryParams)=> {
              this.titulo = queryParams.searchProduct
              this.getSearchProducts(queryParams.searchProduct);
            }
          ) 
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
        this.titulo = category.name;
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
        this.productos = productos;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getSearchProducts(productoBuscar: string){
    const obsProducts = this._productService.getSearchProducts(productoBuscar);
    obsProducts.subscribe(
      (productos: Product[]) => {
        this.productos = productos.slice(0,4);
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
