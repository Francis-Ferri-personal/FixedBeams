import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor(private readonly _httpClient: HttpClient) { 
    
  }
}
