import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NarbarComponentService } from 'src/app/general/navbar/navbar-service/narbar-component.service';
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

  categoria: any;

  categoriaId: any;

  constructor(private productoService: ProductoComplementServiceService,
    private cdr: ChangeDetectorRef, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("categoria antes: " + this.categoriaId);
    this.categoriaId = this.rutaActiva.snapshot.params['categoriaId'];
    console.log("categoria despues: " + this.categoriaId);

    if(this.categoriaId == undefined){
      this.productoService.getProductos().subscribe((data: any) => {

        console.log(data);
        this.productos = data;
        console.log("listProductos:" + this.productos);
        this.cdr.detectChanges();
        this.categoria = "Productos";
    });
    }else{
      this.productoService.getProductosByCategoriaId( this.rutaActiva.snapshot.params['categoriaId'] ).subscribe((data: any) => {
        console.log(data);
        this.productos = data;
        console.log("listProductos:" + this.productos);
        this.cdr.detectChanges();
        this.categoriaId = undefined;
        this.categoria = data[0].productoBase.categoria.nombre;
      });
    }


  }


}
