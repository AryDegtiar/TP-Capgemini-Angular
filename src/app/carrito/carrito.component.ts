import { Component, OnInit } from '@angular/core';
import { CarritoComponentService } from './carrito-service/carrito-component.service';

@Component({
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public items: any[] = [];

  public grandTotal: number = 0;

  public cantItems: number = 0;

  constructor(private cartService: CarritoComponentService) { }

  ngOnInit() {
    this.cartService.getProducts().subscribe((res: any) => {
      this.items = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.cantItems = this.cartService.getTotalCant();

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
    this.cartService.decrementProduct(item);
  }

  increment(item: any) {
    this.cartService.addProduct(item);
  }

}
