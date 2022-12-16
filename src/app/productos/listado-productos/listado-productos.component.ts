import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductoComplementServiceService } from '../producto-service/producto-complement-service.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListadoProductosComponent implements OnInit{
 /*
  listProductos = [
    {nombre: 'Producto 1', precio: 100},
    {nombre: 'Producto 2', precio: 200},
    {nombre: 'Producto 3', precio: 300},
    {nombre: 'Producto 4', precio: 400},
    {nombre: 'Producto 5', precio: 500},
    {nombre: 'Producto 6', precio: 600},
  ]
  */

  listProductos: any = [];

  constructor(private listProductoService: ProductoComplementServiceService) { }

  ngOnInit(): void {
    this.listProductoService.getProductos().subscribe((data: any) => {
      this.listProductos = data;
    })
  }

}
