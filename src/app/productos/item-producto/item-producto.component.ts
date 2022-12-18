import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CarritoComponentService } from 'src/app/carrito/carrito-service/carrito-component.service';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ItemProductoComponent implements OnInit{
  @Input() producto: any = null;

  constructor(private cartService: CarritoComponentService) { }

  disponible: boolean = false;

  ngOnInit(): void {

    if(this.producto.estadoPublicacion == 'DISPONIBLE'){
      this.disponible = true;
    }

  }

  addtoCart() {
    if(this.cartService.verificarMismoVendedor(this.producto)){
      this.cartService.addProduct(this.producto);
      alert('Producto agregado al carrito');
    }else{
      alert('No se puede agregar el producto, ya que tiene un vendedor diferente al de carrito');
    }
  }

}
