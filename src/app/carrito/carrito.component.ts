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

  metodosPagos: any[] = [];

  metodoPagoInput: any = null;

  direccionInput: any = null;

  constructor(private cartService: CarritoComponentService) { }

  ngOnInit() {
    this.cartService.getProducts().subscribe((res: any) => {
      this.items = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.cantItems = this.cartService.getTotalCant();
      this.metodosPagos = this.cartService.getMetodosPagos();

      console.log("metodospagos: ");
      console.log(this.metodosPagos);
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
    if(this.items.length == 0){
      this.metodosPagos = [];
    }
  }

  removeAll() {
    this.cartService.removeAllCart();
    this.metodosPagos = [];
    this.direccionInput = "";
  }

  decrement(item: any) {
    this.cartService.decrementProduct(item);
  }

  increment(item: any) {
    this.cartService.addProduct(item);
  }

  comprar() {
    if ((this.metodoPagoInput != null && this.direccionInput != null)|| (this.metodoPagoInput != undefined && this.direccionInput != undefined)) {
      this.cartService.comprar(this.items ,this.metodoPagoInput, this.direccionInput);
      this.removeAll();
    } else {
      alert("Debe seleccionar un metodo de pago y una direccion");
    }
  }

}
