import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarritoService} from "../../services/carrito.service";

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
  iduser = 1;
  constructor(
    private readonly _serviceCar: CarritoService
  ) { }

  ngOnInit(): void {
    this.insertCart();
    this.totalProductos();
   // this.paytypemodel = this.inputpaytype;
    console.log('FRANCIS NO ME SALEEEEE', this.paytypemodel);
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
      latitude: 50,
      longitude: 50,
      idUser: this.iduser
    });
  }

}
