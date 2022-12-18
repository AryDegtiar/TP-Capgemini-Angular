import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CarritoComponentService } from 'src/app/carrito/carrito-service/carrito-component.service';
import { ProductoComplementServiceService } from '../producto-service/producto-complement-service.service';


@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit{
  id!: any;

  producto: any = null;

  cantidad = 1;

  constructor(private rutaActiva: ActivatedRoute, private productService: ProductoComplementServiceService,
    private cartService: CarritoComponentService) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params['id'];

    this.productService.getProducto(this.id).subscribe((data: any) => {
      this.producto = data;

    });
  }

  addtoCart() {
    if(this.cartService.verificarMismoVendedor(this.producto)){
      for(let i=0; i<this.cantidad; i++){
        this.cartService.addProduct(this.producto);
      }
      alert('Producto agregado al carrito');
    }else{
      alert('No se puede agregar el producto, ya que tiene un vendedor diferente al de carrito');
    }
  }

}
