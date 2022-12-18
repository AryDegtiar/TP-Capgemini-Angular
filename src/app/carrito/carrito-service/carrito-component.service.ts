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
    let productExist = false;
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].id === product.id) {
        this.cartItemList[i].cantidad += 1;
        productExist = true;
        break;
      }
    }
    if (!productExist) {
      Object.assign(product, { cantidad: 1});
      this.cartItemList.push(product);
    }
    this.productList.next(this.cartItemList);
  }

  decrementProduct(product: any) {
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

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.cantidad * a.precioTotal;
    })
    return grandTotal;
  }

  removeCartItem(product: any) {
    for (let [index, p] of this.cartItemList.entries()) {
      if (p.id === product.id) {

        this.cartItemList.splice(index, 1);

      }
    }
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  getTotalCant() {
    let cant = 0;
    this.cartItemList.map((a: any) => {
      cant += a.cantidad;
    })
    return cant;
  }

  verificarMismoVendedor(product: any){
    let mismoVendedor = true;
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].vendedor.id !== product.vendedor.id) {
        mismoVendedor = false;
        break;
      }
    }
    return mismoVendedor;
  }

}
