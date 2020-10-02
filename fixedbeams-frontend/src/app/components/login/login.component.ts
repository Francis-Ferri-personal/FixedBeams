import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output()
  userlogin: EventEmitter<any> = new EventEmitter<any>();
  user;
  rolmodel: string;
  emailmodel: string;
  passwordmodel: string;
  form;
  constructor(
    private readonly _router: Router,
    private readonly _serviceUser: UserService
  ) { }

  ngOnInit(): void {
  }

  goTo() {
    const nav = [''];
    this._router.navigate(nav);
  }

  getUser(formBill) {
    this.form = {
      email: this.emailmodel,
      password: this.passwordmodel
    };
    console.log(this.form);
    const obsevableuser = this._serviceUser.getOne(this.form);
    obsevableuser.subscribe(
      (data) => {
        this.user = data;
        this._serviceUser.usuario = this.user;
        this.goTo();
      }
    ), (e) => {
      console.log('ERROR', e );
    };
  }
}
