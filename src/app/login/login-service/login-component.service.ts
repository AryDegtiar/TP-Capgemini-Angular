import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginComponentService {

  usuario?: any;

  nuevaSesion = new EventEmitter<any>

  constructor(private http: HttpClient) { }

  buscarUsuario(email: string, password: string){
    return this.http.get('http://localhost:8082/cliente/login?email=' + email + '&password=' + password);
  }

  notificar(){
    return this.nuevaSesion.emit(this.usuario);
  }
}
