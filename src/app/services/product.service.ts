import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//enjekte edilecek servis
export class ProductService {

  apiUrl= 'https://localhost:44349/api/Products/getall' ;
  constructor(private httpClient:HttpClient) { }
//Dönüş tipi observable productresponseModel dönüp return olarak api geliyor
  getProducts():Observable<ProductResponseModel>{
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
