import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IP_SERVER, PORT_SERVER } from '../config/constants';


@Injectable()
export class DomainService {

  url = `http://${IP_SERVER}:${PORT_SERVER}/domain`

  constructor(private readonly _httpClient: HttpClient) { }

  getDomainCategories(idDomain: number){
    return this._httpClient.get(this.url + "/categories/" + idDomain);
  }
}

