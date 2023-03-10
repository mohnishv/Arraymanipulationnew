import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private _http: HttpClient) {}
  getTypeRequest(url: any) {
    return this._http.get(`${this.baseUrl}${url}`).pipe(
      map((res) => {
        return res;
      })
    );
  }
  postTypeRequest(url: any, payload: any) {
    return this._http.post(`${this.baseUrl}${url}`, payload).pipe(
      map((res) => {
        return res;
      })
    );
  }
  putTypeRequest(url: any, payload: any) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe(
      map((res) => {
        return res;
      })
    );
  }
  getUsers() {
    return this._http.get(this.baseUrl + 'albums');
  }

  getContacts() {
    return this._http.get(this.baseUrl + 'posts');
  }

  getAddresses() {
    return this._http.get(this.baseUrl + 'users');
  }
}
