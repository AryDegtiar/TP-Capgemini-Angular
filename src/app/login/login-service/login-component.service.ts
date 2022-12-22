import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginComponentService {

  usuario?: any;

  nuevaSesion = new EventEmitter<any>

  constructor(private http: HttpClient) { }

  buscarUsuario(usu: any){
    //return this.http.get('http://localhost:8082/cliente/login');
    return this.http.post('http://localhost:8082/cliente/login', usu)
  }

  notificar(){
    return this.nuevaSesion.emit(this.usuario);
  }

  registrarse(formularioRegistro: any){
    return this.http.post('http://localhost:8082/cliente', formularioRegistro);
  }

}
