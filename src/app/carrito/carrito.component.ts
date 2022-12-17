import { Component, OnInit } from '@angular/core';
import { CarritoComponentService } from './carrito-service/carrito-component.service';

@Component({
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public items: any[] = [];

  public mapItems: any[] = [];

  public grandTotal!: number;

  constructor(private cartService: CarritoComponentService) { }

  ngOnInit() {
    this.cartService.getProducts().subscribe((res: any) => {
      this.items = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.mapItems = Array.from(this.convertListToMap(this.items).values());

      console.log("items: ");
      console.log(this.mapItems);
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  removeAll() {
    this.cartService.removeAllCart();
  }

  convertListToMap(items: any) {
    let map = new Map();
    items.forEach((item: any) => {
      if (map.has(item.id)) {
        map.set(item.id, { ...map.get(item.id), cantidad: map.get(item.id).cantidad + 1 });
      } else {
        map.set(item.id, { ...item, cantidad: 1 });
      }
    });
    return map;
  }

  decrement(item: any) {
    if (item.cantidad > 1) {
      this.cartService.removeCartItem(item);
      console.log(this.items);
    }
  }

  increment(item: any) {
    this.cartService.addProduct(item);
    console.log(this.items);
  }

}
