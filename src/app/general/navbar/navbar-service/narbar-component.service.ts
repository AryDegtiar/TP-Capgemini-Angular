import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NarbarComponentService {


  constructor(private http: HttpClient) { }

  getCategorias() {
   return this.http.get('http://localhost:8082/categoria');
  }

}
