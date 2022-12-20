import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CarritoComponentService } from 'src/app/carrito/carrito-service/carrito-component.service';
import Swal from 'sweetalert2';
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
    if(localStorage.getItem('usuario') != null) {
      if(this.cartService.verificarMismoVendedor(this.producto)){
        for(let i=0; i<this.cantidad; i++){
          this.cartService.addProduct(this.producto);
        }
        Swal.fire({
          title: 'Articulo agregado al carrito',
          imageUrl: '../../../assets/images/carro-de-la-carretilla.png',
          imageWidth: 70,
          imageHeight: 70,
          imageAlt: 'Custom image',
        });
      }else{
        Swal.fire({
          icon: 'error',
          text: 'No se puede agregar el producto, ya que tiene un vendedor diferente al de carrito'
        });
      }
    }else{
      Swal.fire({
        icon: 'error',
        text: 'Debe iniciar sesión para agregar productos al carrito'
      });
    }
  }
}
