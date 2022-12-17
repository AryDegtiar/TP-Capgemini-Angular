import { Component, OnInit } from '@angular/core';
import { CarritoComponentService } from './carrito-service/carrito-component.service';

@Component({
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public items: any[] = [];

  public grandTotal!: number;

  constructor(private cartService: CarritoComponentService) { }

  ngOnInit() {
    this.cartService.getProducts().subscribe((res: any) => {
      this.items = res;
      this.grandTotal = this.cartService.getTotalPrice();

      console.log("items: ");
      console.log(this.items);
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  removeAll() {
    this.cartService.removeAllCart();
  }

  decrement(item: any) {
    if (item.cantidad > 1){
      item.cantidad -= 1;
      this.cartService.setProduct(item);
      console.log("item: ");
      console.log(item);
    }
  }

  increment(item: any) {
    item.cantidad += 1;
    this.cartService.setProduct(item);
    console.log("item: ");
    console.log(item);
  }

}
