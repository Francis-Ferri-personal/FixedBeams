import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IP_SERVER, PORT_SERVER } from '../config/constants';

@Injectable()
export class BillService {

  url = `http://${IP_SERVER}:${PORT_SERVER}`;
  constructor(private readonly _httpClient: HttpClient) { }
  create(bill){
    return this._httpClient.post(
      this.url + '/bill', // URL
      bill
    );
  }
}
