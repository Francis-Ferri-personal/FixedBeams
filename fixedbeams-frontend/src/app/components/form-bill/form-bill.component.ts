import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarritoService} from "../../services/carrito.service";
import {BillDetailService} from "../../services/bill-detail.service";
import {Router} from "@angular/router";
import {BillService} from "../../services/bill.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-form-bill',
  templateUrl: './form-bill.component.html',
  styleUrls: ['./form-bill.component.css']
})
export class FormBillComponent implements OnInit {
  @Input()
  inputpaytype: string;
  @Output()
  informationValitate: EventEmitter<any> = new EventEmitter<any>();
  paytypemodel: string;
  products;
  total = 0;
  billdetail;
  constructor(
    private readonly _serviceCar: CarritoService,
    private readonly _serviceBillDetail: BillDetailService,
    private readonly _route: Router,
    private readonly _serviceBill: BillService,
    private readonly _serviceUser: UserService
  ) { }

  ngOnInit(): void {
    this.insertCart();
    this.totalProductos();
   // this.paytypemodel = this.inputpaytype;
   //  console.log('FRANCIS NO ME SALEEEEE', this.paytypemodel);
  }
  insertCart() {
    this.products = this._serviceCar.getProductCar();
  }
  totalProductos(){
    this.products.forEach(
      (valroActual, indice, arreglocompleto) => {
        this.total +=  (Number(valroActual.price) * Number(valroActual.quantity));
      }
    );
    console.log('TOTALLLL', this.total);
  }
  createBill(bill){
    this.informationValitate.emit({
      paymentType: this.paytypemodel,
      total: this.total,
      latitude: Math.round(Math.random() * 50),
      longitude: Math.round(Math.random() * 50),
      idUser: this._serviceUser.usuario.id
    });
  }

  deleteAllBuy() {
    this.products.forEach(
      (producto) => {
        this._serviceCar.borrarProducto(producto);
      }, (e) => {
        console.log('ERROR', e);
      }
    );
  }
}
