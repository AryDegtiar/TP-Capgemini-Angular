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

  firstElement = 0;

  maxProductos = 4;

  pageActual = 1;

  constructor(private productoService: ProductoComplementServiceService,
    private cdr: ChangeDetectorRef, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoriaId = this.rutaActiva.snapshot.params['categoriaId'];
    this.buscadorInput = this.rutaActiva.snapshot.params['buscadorInput'];
    console.log("categoriaId:" + this.categoriaId);
    console.log("buscadorInput:" + this.buscadorInput);

    this.mostrarProductosInicialmente(this.firstElement, this.maxProductos);

  }

  previusPage(){
    //console.log("previusPage");
    if(this.pageActual >= 2){
      this.pageActual = this.pageActual - 1 ;
      this.mostrarProductosInicialmente(this.maxProductos * (this.pageActual-1), this.maxProductos);
    }
  }

  nextPage(){
    if(this.categoriaId == null || this.categoriaId == undefined){
      this.productoService.getProductos(this.maxProductos * (this.pageActual), this.maxProductos).subscribe((d: any) => {
        //console.log("data ", d, " length: ", d.length)
        if(d.length > 0){
          //console.log("siguiente lleno: " , "first: ", this.maxProductos * (this.pageActual-1), " max: ", this.maxProductos);
          this.mostrarProductosInicialmente(this.maxProductos * (this.pageActual), this.maxProductos);
          this.pageActual = this.pageActual + 1;
        }
        this.cdr.detectChanges();
      });
    }else{
      this.productoService.getProductosByCategoriaId(this.maxProductos * (this.pageActual), this.maxProductos, this.rutaActiva.snapshot.params['categoriaId'] ).subscribe((d: any) => {
        //console.log("data ", d, " length: ", d.length)
        if(d.length > 0){
          //console.log("siguiente lleno: " , "first: ", this.maxProductos * (this.pageActual-1), " max: ", this.maxProductos);
          this.mostrarProductosInicialmente(this.maxProductos * (this.pageActual), this.maxProductos);
          this.pageActual = this.pageActual + 1;
        }
        this.cdr.detectChanges();
      });
    }
  }

  mostrarProductosInicialmente(first:any, max:any){
    console.log("categoria :", this.categoriaId);
    if(this.categoriaId == undefined){
      this.productoService.getProductos(first, max).subscribe((data: any) => {
        this.productos = data;
        console.log("listProductos:");
        console.log(this.productos)
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
      this.productoService.getProductosByCategoriaId( first, max , this.rutaActiva.snapshot.params['categoriaId'] ).subscribe((data: any) => {
        this.productos = data;
        console.log("listProductos:" + this.productos);
        this.cdr.detectChanges();
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
