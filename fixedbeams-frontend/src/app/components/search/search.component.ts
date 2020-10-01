import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchModel: string;

  constructor(private readonly _router: Router) { }

  ngOnInit(): void {  }
  
  buscarProducto(){
    if(this.searchModel === undefined || this.searchModel === ""){
      this._router.navigate(["/"]);
    } else {
      let url = ["/products"];
      const queryParams = {searchProduct: this.searchModel};
      this._router.navigate(url,{queryParams});
    }
    
  }
}



