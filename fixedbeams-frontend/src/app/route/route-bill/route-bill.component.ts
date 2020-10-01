import { Component, OnInit } from '@angular/core';
import {CarritoService} from "../../services/carrito.service";
import {Router} from "@angular/router";
import {BillService} from "../../services/bill.service";

@Component({
  selector: 'app-route-bill',
  templateUrl: './route-bill.component.html',
  styleUrls: ['./route-bill.component.css']
})
export class RouteBillComponent implements OnInit {
  products;
  total = 0;
  constructor(
    private readonly _serviceCar : CarritoService,
    private readonly _serviceBill: BillService,
    private readonly _route: Router
  ) { }

  ngOnInit(): void {

  }
  createBill(bill) {
    const observableCreate = this._serviceBill.create(bill);
    console.log('AQUIIIIIIII', bill);
    observableCreate.subscribe(
      (data) => {
        const url = [''];
        this._route.navigate(url);
      },
      (e) => {
        console.error('Error', e);
      }
    );
  }
}
