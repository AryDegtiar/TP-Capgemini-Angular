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

  ngOnInit(): void {

  }

  addtoCart() {
    this.cartService.addProduct(this.producto);
    alert('Producto agregado al carrito');
  }

}
