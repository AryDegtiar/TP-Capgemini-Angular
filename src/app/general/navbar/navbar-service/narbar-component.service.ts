import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NarbarComponentService {


  constructor(private http: HttpClient) { }

  postUsuario(usuario: any) {
    return this.http.post('http://localhost:8082/usuario', usuario);
  }

  getCategorias() {
   return this.http.get('http://localhost:8082/categoria');
  }
}
