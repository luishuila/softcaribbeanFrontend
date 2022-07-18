import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { CustomerModels } from './../Models/Customer.models';

import { map, filter, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private urs:string = environment.urlcustomer
  constructor(private _http: HttpClient) { }

  getCustomer(){
    return this._http.get(`${this.urs}customer`)
  }
  PortCustomer(data:CustomerModels){
    return this._http.post(`${this.urs}customer`,data)
  }
  getCustomerId(id:number){
    return this._http.get<CustomerModels>(`${this.urs}customer/${id}`);
  }
  PortCustomerId(data:CustomerModels,id:number){
    const data1:CustomerModels = {
      ...data,
      id:id
    }
    return this._http.post(`${this.urs}customer`,data1)
  }
  DeleteCustomer(id:number){
    return this._http.delete<CustomerModels>(`${this.urs}customer/${id}`);
  }
}
