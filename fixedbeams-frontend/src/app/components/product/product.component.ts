import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product, ProductCart } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;
  cantidad: number;

  constructor(
    private readonly _productService: ProductService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _carritoService: CarritoService,
    private readonly _router: Router
  ) { 
    this.cantidad = 0;
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => {
        const id = Number(parametros.id);
        if(id != NaN){
          this.getProduct(id);
        }
      }
    )
  }

  ngOnInit(): void {
  }

  getProduct(id: number){
    const obsCategory =  this._productService.getProduct(id);
    obsCategory.subscribe(
      (product: Product) => {
        this.product = product;
        this.cargarCantidadGuardada();
      },
      (error) => {
        console.log(error);
      }
    )
  }
  aumentarCantidad(){
    if(this.cantidad < this.product.stock){
      this.cantidad += 1;
    }
  }

  disminuirCantidad(){
    if(this.cantidad > 0){
      this.cantidad -= 1;
    }
  }
  
  guardarProducto(){
    if (this.cantidad === 0){
      this._carritoService.borrarProducto(this.product);
      return;
    }
    const produtoCarrito: ProductCart = {
      id: this.product.id, 
      name: this.product.name, 
      price: this.product.price, 
      quantity: this.cantidad,
      srcImage: this.product.srcImage
    };
    this._carritoService.guardarProduco(produtoCarrito);
    alert("Producto agregado");
    this._router.navigate(["/"]);
  }

  cargarCantidadGuardada(){
    this.cantidad = this._carritoService.obtenerCantidadGuardada(this.product);
  }

}
