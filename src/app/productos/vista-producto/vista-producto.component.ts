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

  constructor(private rutaActiva: ActivatedRoute, private productService: ProductoComplementServiceService,
    private cartService: CarritoComponentService) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params['id'];

    this.productService.getProducto(this.id).subscribe((data: any) => {
      this.producto = data;
      console.log(this.producto);
    });
  }

  addtoCart() {
    this.cartService.addProduct(this.producto);
    alert('Producto agregado al carrito');
  }

}
