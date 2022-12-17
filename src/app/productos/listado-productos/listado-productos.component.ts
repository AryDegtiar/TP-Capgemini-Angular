import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductoComplementServiceService } from '../producto-service/producto-complement-service.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListadoProductosComponent implements OnInit{
/*
  productos = [
    {nombre: 'Producto 1', precio: 100, activo: true},
    {nombre: 'Producto 2', precio: 200, activo: false},
    {nombre: 'Producto 3', precio: 300, activo: true},
    {nombre: 'Producto 4', precio: 400,  activo: false},
    {nombre: 'Producto 5', precio: 500, activo: true},
    {nombre: 'Producto 6', precio: 600, activo: false},
  ]

  constructor(private listProductoService: ProductoComplementServiceService) { }

  ngOnInit(): void {
  }

*/

  productos: any[] = [];

  constructor(private listProductoService: ProductoComplementServiceService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.listProductoService.getProductos().subscribe((data: any) => {
      console.log(data);
      this.productos = data;
      console.log("listProductos:" + this.productos);
      this.cdr.detectChanges();
    });
  }


}
