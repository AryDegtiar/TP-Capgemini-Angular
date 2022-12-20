import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CarritoComponentService } from 'src/app/carrito/carrito-service/carrito-component.service';
import Swal from 'sweetalert2';
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
    if(localStorage.getItem('usuario') != null) {
      if(this.cartService.verificarMismoVendedor(this.producto)){
        this.cartService.addProduct(this.producto);
        Swal.fire({
          title: 'Articulo agregado al carrito',
          imageUrl: '../../../assets/images/carro-de-la-carretilla.png',
          imageWidth: 70,
          imageHeight: 70,
          imageAlt: 'Custom image',
        });
      }else{
        Swal.fire({
          icon: 'error',
          text: 'No se puede agregar el producto, ya que tiene un vendedor diferente al de carrito'
        });
      }
    }else{
      Swal.fire({
        icon: 'error',
        text: 'Debe iniciar sesión para agregar productos al carrito'
      });
    }
  }

}
