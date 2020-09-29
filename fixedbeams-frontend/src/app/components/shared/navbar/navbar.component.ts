import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  listaDominios: DominioItem[]; 
  
  constructor() { 
    this.listaDominios = [];
    this.listaDominios.push({name:"cars", id: 1, srcImage: "assets/img/navbar/cars.png"})
    this.listaDominios.push({name:"equipments", id: 2, srcImage: "assets/img/navbar/equipments.png"})
    this.listaDominios.push({name:"materials", id: 3, srcImage: "assets/img/navbar/materials.png"})
    this.listaDominios.push({name:"teams", id: 4, srcImage: "assets/img/navbar/teams.png"})
    this.listaDominios.push({name:"tools", id: 5, srcImage: "assets/img/navbar/tools.png"})
  }

  ngOnInit(): void {
  }

}
interface DominioItem {
  name: string;
  id: number;
  srcImage: string;
}
