import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CarComponent} from '../../car/car.component';
import {MatDialogComponent} from '../../../modals/mat-dialog/mat-dialog.component';

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
  courselist = document.querySelector('#car-list');

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _matDialog: MatDialog
  ) { }


  ngOnInit(): void {
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
  }

  emptyCarAll() {
    while (this.courselist.firstChild){
      this.courselist.removeChild(this.courselist.firstChild);
    }
    return false;
  }
  getCourseocalStorage(){
    let courseLS;
    if(localStorage.getItem('courses') === null){
      courseLS = [];
    }else{
      courseLS = JSON.parse(localStorage.getItem('courses'));
    }
    return courseLS;
  }
  insertCar(course){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${course.imagen}">
        </td>
        <td>
            ${course.titulo}
        </td>
        <td>
            ${course.precio}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${course.id}" >X
        </td>

    `;
    // listaCursos.appendChild(row);
    // guardarCursoLocalStorage(curso);

  }
}
