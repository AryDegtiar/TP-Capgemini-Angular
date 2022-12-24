import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoComplementServiceService {

  bodyClick = {
    sumarVisita: true,
  };

  constructor(private http: HttpClient) { }

  getProductos(firstElement: any,  maxProductos: any) {
   return this.http.get('http://localhost:8082/publicacion/paginable/' + firstElement + '/' + maxProductos + '?activo=true');
  }

  getProducto(id: any) {
    return this.http.get('http://localhost:8082/publicacion/' + id);
  }


  getProductosByCategoriaId(firstElement: any,  maxProductos: any, id: any) {
    return this.http.get('http://localhost:8082/publicacion/paginable/' + firstElement + '/' + maxProductos +'?categoriaId=' + id);
  }

  getProductosByBuscadorInput(firstElement: any,  maxProductos: any, buscadorInput: any) {
    return this.http.get('http://localhost:8082/publicacion/paginable/' + firstElement + '/' + maxProductos +'?buscar=' + buscadorInput);
  }

  getProductosByCategoriaIdAndBuscadorInput(firstElement: any,  maxProductos: any, idCat: any, buscadorInput: any) {
    return this.http.get('http://localhost:8082/publicacion/paginable/' + firstElement + '/' + maxProductos +'?categoriaId=' + idCat + '&buscar=' + buscadorInput);
  }

  getProductosMasVisitados(cantidadProductos: any){
    return this.http.get('http://localhost:8082/publicacion/masVisitados/' + cantidadProductos);
  }

  sumarVisita(id: any) {
    return this.http.post<any>('http://localhost:8082/publicacion/sumarVisita/' + id, this.bodyClick);
  }
}
