import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoComplementServiceService {

  constructor(private http: HttpClient) { }

  getProductos() {
   return this.http.get('http://localhost:8082/publicacion?activo=true');
  }

  getProducto(id: any) {
    return this.http.get('http://localhost:8082/publicacion/' + id);
  }

  getProductosByCategoriaId(id: any) {
    return this.http.get('http://localhost:8082/publicacion?categoriaId=' + id);
  }
}
