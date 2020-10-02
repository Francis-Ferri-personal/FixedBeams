import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CarComponent} from '../../car/car.component';
import {MatDialogComponent} from '../../../modals/mat-dialog/mat-dialog.component';
import {CarritoService} from "../../../services/carrito.service";
import {LoginComponent} from "../../login/login.component";
import {UserService} from "../../../services/user.service";
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
  //productlist = document.querySelector('#car-list');
  products;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _matDialog: MatDialog,
    private readonly _serviceCar: CarritoService,
    public readonly _serviceUser: UserService
  ) {
   // this.insertCar();
  }
  searchModel: string;



  ngOnInit(): void {
    this.insertCar();
     //this.getUser();
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
    if (route === 'login'){
      const nav = ['/login'];
      this._router.navigate(nav);
    }
  }

  emptyCarAll() {
    // storage.clear();
    this.products.forEach(
      (producto) => {
        this._serviceCar.borrarProducto(producto);
      }, (e) => {
        console.log('ERROR', e);
      }
    );
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
  buscarProducto(){
    if(this.searchModel === undefined || this.searchModel === ""){
      this._router.navigate(["/"]);
    } else {
      let url = ["/products"];
      const queryParams = {searchProduct: this.searchModel};
      this._router.navigate(url,{queryParams});
    }

  }
  getUser(){
    // this.userl.emitEvent
    //   .subscribe(
    //     res =>
    //     {
    //       console.log("Atributo:" + res);
    //       this.childTwo.dataShared = res;
    //     }
    //   );
  }

  eliminarOne(product) {
    this._serviceCar.borrarProducto(product);
  }
}
