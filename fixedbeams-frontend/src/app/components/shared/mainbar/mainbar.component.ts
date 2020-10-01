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
  products;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _matDialog: MatDialog,
    private readonly _serviceCar: CarritoService,
  ) {
   // this.insertCar();
  }


  ngOnInit(): void {
     this.insertCar();
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
    // storage.clear();
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
    this.products = this._serviceCar.getProductCar();
    console.log(this.products);
  }
}
