import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialComponentServiceService {

  constructor(private http: HttpClient) { }

  getHistorialesCompras(){
    let cliente = JSON.parse(localStorage.getItem('usuario') || '{}');
    return this.http.get('http://localhost:8082/cliente/' + cliente.id + '/compraRealizadas');
  }

  getProductosCompra(cantidadXProductos: string){
    return this.http.get(cantidadXProductos);
  }
}
