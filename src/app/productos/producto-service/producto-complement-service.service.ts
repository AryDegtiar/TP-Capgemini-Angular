import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoComplementServiceService {

  //productosMostrados = new EventEmitter<any>(); se crea para mandarle info a buscador

  bodyClick = {
    sumarVisita: true,
  };

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

  getProductosMasVisitados(cantidadProductos: any){
    return this.http.get('http://localhost:8082/publicacion/masVisitados/' + cantidadProductos);
  }

  sumarVisita(id: any) {
    return this.http.post<any>('http://localhost:8082/publicacion/sumarVisita/' + id, this.bodyClick);
  }
}
