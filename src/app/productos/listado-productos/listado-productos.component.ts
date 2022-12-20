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
  productos: any[] = [];

  categoria: any;

  categoriaId: any;

  buscadorInput = "";

  constructor(private productoService: ProductoComplementServiceService,
    private cdr: ChangeDetectorRef, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoriaId = this.rutaActiva.snapshot.params['categoriaId'];
    this.buscadorInput = this.rutaActiva.snapshot.params['buscadorInput'];
    console.log("categoriaId:" + this.categoriaId);
    console.log("buscadorInput:" + this.buscadorInput);

    if(this.categoriaId == undefined){
      this.productoService.getProductos().subscribe((data: any) => {

        this.productos = data;
        console.log("listProductos:" + this.productos);
        this.cdr.detectChanges();
        this.categoria = "Productos";

        if(this.buscadorInput != undefined){
          this.productos = this.productos.filter((producto: any) => {
            return producto.nombre.toLowerCase().includes(this.buscadorInput.toLowerCase());
          });
        }

        console.log("listProductos:" + this.productos);

    });
    }else{
      this.productoService.getProductosByCategoriaId( this.rutaActiva.snapshot.params['categoriaId'] ).subscribe((data: any) => {
        this.productos = data;
        console.log("listProductos:" + this.productos);
        this.cdr.detectChanges();
        this.categoriaId = undefined;
        this.categoria = data[0].productoBase.categoria.nombre;

        if(this.buscadorInput != undefined){
          this.productos = this.productos.filter((producto: any) => {
            return producto.nombre.toLowerCase().includes(this.buscadorInput.toLowerCase());
          });
        }

      });
    }

  }




}
