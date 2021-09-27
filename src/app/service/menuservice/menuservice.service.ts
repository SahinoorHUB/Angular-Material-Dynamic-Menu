import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  constructor(private http: HttpClient) { }

  Totaldata(){
    return  this.http.get(`../../../assets/nestedMenu.json`) as Observable<any>;
  }
}
