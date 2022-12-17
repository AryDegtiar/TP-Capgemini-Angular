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
    this.usuario = this.http.get('http://localhost:8082/cliente/login?email=' + email + '&password=' + password);
  }

  getBusqueda(){
    this.notificar();
    return this.usuario;
  }

  notificar(){
    return this.nuevaSesion.emit(this.usuario);
  }
}
