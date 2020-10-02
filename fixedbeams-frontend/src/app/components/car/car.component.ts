import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MainbarComponent} from "../shared/mainbar/mainbar.component";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(
    private readonly _matDialog: MatDialogRef<MainbarComponent>,
    @Inject(MAT_DIALOG_DATA)
    public readonly data: {datosUsuario: any}
  ) { }

  ngOnInit(): void {
  }

}
