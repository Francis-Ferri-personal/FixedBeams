import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MainbarComponent} from "../../components/shared/mainbar/mainbar.component";

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css']
})
export class MatDialogComponent implements OnInit {

  constructor(
    private readonly _matDialog: MatDialogRef<MainbarComponent>,
    @Inject(MAT_DIALOG_DATA)
    public readonly data: {datosUsuario: any}
  ) { }

  ngOnInit(): void {
  }

  close() {
    this._matDialog.close({respuesta: 'adios'});
  }
}
