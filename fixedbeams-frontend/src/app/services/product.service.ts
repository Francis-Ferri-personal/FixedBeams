import { Injectable } from '@angular/core';
import { IP_SERVER, PORT_SERVER } from '../config/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = `http://${IP_SERVER}:${PORT_SERVER}/product`

  constructor(private readonly _httpClient: HttpClient) { }

  getProduct(idProduct: number){
    return this._httpClient.get(this.url + "/" + idProduct);
  }

  getSearchProducts(productoBuscar: string){    
    return this._httpClient.get(this.url + "?productoBuscar=" + productoBuscar);
  }
}
