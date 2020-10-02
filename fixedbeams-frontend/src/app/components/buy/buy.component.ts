import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {BillService} from "../../services/bill.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  buys;
  constructor(
    private readonly _user: UserService,
    private readonly _billservice: BillService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerdata(this._user.usuario.id);
  }

  private obtenerdata(id: number) {
    const obserbuys = this._billservice.getOne(id);
    obserbuys.subscribe(
      (buys) => {
        this.buys = buys;
      },
      (e) => {
        console.log('Error', e);
    }
    );
  }


  goTo() {
    const nav = ['/'];
    this._router.navigate(nav);
  }
}
