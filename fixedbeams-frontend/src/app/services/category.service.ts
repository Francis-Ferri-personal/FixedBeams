import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IP_SERVER, PORT_SERVER } from '../config/constants';

@Injectable()
export class CategoryService {

  url = `http://${IP_SERVER}:${PORT_SERVER}/category`
  
  constructor(private readonly _httpClient: HttpClient) { }

  getCategoryProducts(idCategory: number){
    return this._httpClient.get(this.url + "/products/" + idCategory);
  }

  getCategory(idCategory: number){
    return this._httpClient.get(this.url + "/" + idCategory);
  }
}
