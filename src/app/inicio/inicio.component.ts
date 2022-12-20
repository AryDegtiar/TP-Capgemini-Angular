import { ProductoComplementServiceService } from './../productos/producto-service/producto-complement-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './inicio.component.html',
  styleUrls: [
    './inicio.component.css',
    './inicio.component-animations.css',
    './inicio.component-bg-Animation.css',
  ],
})
export class InicioComponent implements OnInit{

  public obtenerProductosMasVisitados : any[] = [];
  cantidadProductosMasVendidos = 4;

  constructor(private productoService: ProductoComplementServiceService) { }

  ngOnInit(): void {

    this.productoService.getProductosMasVisitados(this.cantidadProductosMasVendidos).subscribe((res: any) => {
      this.obtenerProductosMasVisitados = res;
      console.log("obtenerProductosMasVisitados: ");
      console.log(this.obtenerProductosMasVisitados);
    });

  }

}
