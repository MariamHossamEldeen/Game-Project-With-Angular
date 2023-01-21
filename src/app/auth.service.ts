import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl :string ='https://route-egypt-api.herokuapp.com//';
  register(data : any):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}signup` , data);
  }
  constructor(private _HttpClient:HttpClient) { }

}
