import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CarComponent} from '../../car/car.component';
import {MatDialogComponent} from '../../../modals/mat-dialog/mat-dialog.component';
import {CarritoService} from "../../../services/carrito.service";

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.css']
})
export class MainbarComponent implements OnInit {
  carrito = {
    nombre: 'Roger',
    apellido: 'Guamushig',
  };
  initcar = document.getElementById('car');
  productlist = document.querySelector('#car-list');

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _matDialog: MatDialog,
    private readonly _serviceCar: CarritoService,
  ) {
    this.insertCar();
  }


  ngOnInit(): void {
    // this.insertCar();
  }

  goChildren(route: string) {
    // this._router.navigate(['/' , route]);
   // const routes = this._matDialog.open(CarComponent,{width : '660px' , data : {datosUsuario: this.carrito}});
    const routes = this._matDialog.open(MatDialogComponent, {width : '660px' , data : {datosUsuario: this.carrito}});
    routes.afterClosed().subscribe(
      (response) => {
        console.log(response);
      },
    (error) => {
      console.log('Error', error);
    }
    );
  }

  goTo(route: string) {
    if (route === 'bill'){
      const nav = ['bill'];
      this._router.navigate(nav);
    }
  }

  emptyCarAll() {
    while (this.productlist.firstChild){
      this.productlist.removeChild(this.productlist.firstChild);
    }
    return false;
  }
  getProductStorage(){
    let courseLS;
    if(localStorage.getItem('productoscarrito') === null){
      courseLS = [];
    }else{
      courseLS = JSON.parse(localStorage.getItem('productoscarrito'));
    }
    return courseLS;
  }
  insertCar(){
    const product = this._serviceCar.getProductCar();
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${product.imagen}">
        </td>
        <td>
            ${product.titulo}
        </td>
        <td>
            ${product.precio}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${product.id}" >X
        </td>

    `;
    this.productlist.appendChild(row);
    // guardarCursoLocalStorage(curso);
  }
  // readData(product){
  //   const infProcuct = {
  //     imagen: product.querySelector('img').src,
  //     titulo: product.querySelector('h4').textContent,
  //     precio: product.querySelector('span').textContent,
  //     id: product.querySelector('a').getAttribute('data-id')
  //
  //   };
  //   console.log(infProcuct);
  //   this.insertCar(infProcuct);
  //
  // }
}
