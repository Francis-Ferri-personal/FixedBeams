import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productosCarrito;
  constructor() {
    this.cargarStorage();
  }

  cargarStorage(){
    const productosCarrito = localStorage.getItem("productosCarrito");
    if(productosCarrito){
      this.productosCarrito = JSON.parse(productosCarrito);
    } else {
      this.productosCarrito = [];
    }
  }

  guardarStorage(){
    localStorage.setItem("productosCarrito",JSON.stringify(this.productosCarrito));
  }

  guardarProduco(producto){
    let productoExistente = this.productosCarrito.find((productoCarrito) => productoCarrito.id == producto.id);
    if(productoExistente){
      productoExistente.cantidad = producto.cantidad;
    } else {
      this.productosCarrito.push(producto);
    }
    this.guardarStorage();
  }

  obtenerCantidadGuardada(producto){
    let productoExistente = this.productosCarrito.find((productoCarrito) => productoCarrito.id == producto.id);
    if(productoExistente && productoExistente.cantidad > 0){
      return productoExistente.cantidad;
    } else {
     return 0;
    }
  }

  borrarProducto(producto){
    let productoExistente = this.productosCarrito.find((productoCarrito) => productoCarrito.id == producto.id);
    if(productoExistente){
      const index = this.productosCarrito.indexOf(productoExistente);
      this.productosCarrito.splice(index, 1);
      this.guardarStorage();
    }
  }
  getProductCar(){
    return this.productosCarrito;
  }


}
