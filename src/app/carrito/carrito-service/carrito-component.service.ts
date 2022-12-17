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
    Object.assign(product, { cantidad: 1});
    console.log("product: ");
    console.log(product);
    let productExist = false;
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].id === product.id) {
        this.cartItemList[i].cantidad += 1;
        productExist = true;
        break;
      }
    }
    if (!productExist) {
      this.cartItemList.push(product);
    }
    this.productList.next(this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    for (let i in this.cartItemList) {
      grandTotal += this.cartItemList[i].cantidad * this.cartItemList[i].precio;
    }
    return grandTotal;
  }

  removeCartItem(product: any) {
    for (let [index, p] of this.cartItemList.entries()) {
      if (p.id === product.id) {
        this.cartItemList[index].cantidad -= 1;
        if (this.cartItemList[index].cantidad == 0) {
          this.cartItemList.splice(index, 1);
        }
      }
    }
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}
