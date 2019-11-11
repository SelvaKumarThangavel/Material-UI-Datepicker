import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {

  url:string = "http://localhost:8080";
  
  constructor(private _http: HttpClient) { }

  sendDate(dateValue: any) {
   return this._http.post(`${this.url}/sendDate`, dateValue).pipe(map(user => {
    return user;
   }))
  }

}
