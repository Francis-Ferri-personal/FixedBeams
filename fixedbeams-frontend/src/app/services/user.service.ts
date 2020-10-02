import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IP_SERVER, PORT_SERVER } from '../config/constants';

@Injectable()
export class UserService {
  url = `http://${IP_SERVER}:${PORT_SERVER}`;
  usuario;
  constructor(private readonly _httpClient: HttpClient) { }
  getOne(credenciales){
    return this._httpClient.post(this.url + '/user/login' , credenciales);
  }
}
