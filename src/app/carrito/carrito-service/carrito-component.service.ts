import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoComponentService {
  public cartItemList : any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addProduct(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    localStorage.setItem('cartList', JSON.stringify(this.cartItemList));
    console.log(this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.precioTotal;
    })
    return grandTotal;
  }

  removeCartItem(product: any) {
    for (let i = 0; i < this.cartItemList.length; i++) {
      if (this.cartItemList[i].id === product.id) {
        //this.cartItemList[i].cantidad -= 1;
        //this.cartItemList[i].precioTotal -= product.precio;
        //if (this.cartItemList[i].cantidad === 0) {
          this.cartItemList.splice(i, 1);
        //}
      }
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    localStorage.setItem('cartList', JSON.stringify(this.cartItemList));
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}
