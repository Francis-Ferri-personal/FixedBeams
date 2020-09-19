import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CarComponent} from "../../car/car.component";
import {MatDialogComponent} from "../../../modals/mat-dialog/mat-dialog.component";

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.css']
})
export class MainbarComponent implements OnInit {
  carrito = {
    nombre: 'Roger',
    apellido: 'Guamushig',
  }
  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _matDialog : MatDialog
  ) { }


  ngOnInit(): void {
  }

  goChildren(route:string) {
    // this._router.navigate(['/' , route]);
   // const routes = this._matDialog.open(CarComponent,{width : '660px' , data : {datosUsuario: this.carrito}});
    const routes = this._matDialog.open(MatDialogComponent,{width : '660px' , data : {datosUsuario: this.carrito}});
    routes.afterClosed().subscribe(
      (response)=> {
        console.log('hola');
      },
    (error)=>{
      console.log('hola');
    }
    );
  }
}
