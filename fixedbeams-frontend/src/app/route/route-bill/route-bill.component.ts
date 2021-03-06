import { Component, OnInit } from '@angular/core';
import {CarritoService} from "../../services/carrito.service";
import {Router} from "@angular/router";
import {BillService} from "../../services/bill.service";
import {BillDetailService} from "../../services/bill-detail.service";
import {observable} from "rxjs";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-route-bill',
  templateUrl: './route-bill.component.html',
  styleUrls: ['./route-bill.component.css']
})
export class RouteBillComponent implements OnInit {
  products;
  billdetail;
  total = 0;
  observable;
  arraybill;
  idbill;
  constructor(
    private readonly _serviceCar : CarritoService,
    private readonly _serviceBill: BillService,
    private readonly _route: Router,
    private readonly _serviceBillDetail: BillDetailService,
  ) { }

  ngOnInit(): void {
    this.insertCart();
  }
  createBill(bill) {
      console.log('FACTURAAAAA', bill)
    const observableCreate = this._serviceBill.create(bill);
    observableCreate.subscribe(
      (data) => {
        const url = [''];
        this._route.navigate(url);
      },
      (e) => {
        console.error('Error', e);
      }
    );
    this.ultimoId();
    this.createBillDetailService();
  }
  insertCart() {
    this.products = this._serviceCar.getProductCar();
  }
  createBillDetailService() {
    this.products.forEach(
      (valroActual, indice, arreglocompleto) => {
        this.billdetail = {
          quantity: Number(valroActual.quantity),
          unitPrice: Number(valroActual.price),
          total: (Number(valroActual.price) * Number(valroActual.quantity)),
          idBill: this.idbill,
          idProduct: valroActual.id
        };
        this.observable = this._serviceBillDetail.create(this.billdetail);
        this.observable.subscribe(() => {
          console.log('Funciona');
        }),
          (e) => {
            console.error('ERROR', e);
          };
      }
    );
  }
  ultimoId() {
    const observableBringAll = this._serviceBill.getOne(1);
    observableBringAll
      .subscribe(
        (data) => { // THEN TRY
          this.arraybill = data as any[];
          this.idbill = this.arraybill.forEach(
            (valroActual, indice, arreglocompleto) => {
              this.idbill = valroActual.idbill;
            }
          );
          console.log('IDDDDDDDDDD', this.idbill);
        },
        (error) => { // CATCH
          console.log(error);
        }
      );
  }
}
