import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IP_SERVER, PORT_SERVER } from '../config/constants';

@Injectable()
export class BillDetailService {

  url = `http://${IP_SERVER}:${PORT_SERVER}`;
  constructor(private readonly _httpClient: HttpClient) { }
  create(billdetail){
    return this._httpClient.post(
      this.url + '/bill-detail', // URL
      billdetail
    );
  }
  BringAll(query?: string) {
    return this._httpClient.get(this.url + '/bill-detail?' + query);
  }
}
