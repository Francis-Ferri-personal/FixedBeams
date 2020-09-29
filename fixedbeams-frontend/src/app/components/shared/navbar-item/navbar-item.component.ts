import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css']
})
export class NavbarItemComponent implements OnInit {

  @Input() srcImage: string;
  @Input() idDomain: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
