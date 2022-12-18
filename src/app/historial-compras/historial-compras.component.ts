import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductoComplementServiceService } from '../productos/producto-service/producto-complement-service.service';
import { HistorialComponentServiceService } from './historial-compras-service/historial-component-service.service';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HistorialComprasComponent implements OnInit {

  historialCompras: any;

  mostrarHistorial: boolean = false;

  listCompras: any;

  constructor(private historialComprasService: HistorialComponentServiceService, private productoService: ProductoComplementServiceService) {}

  ngOnInit(): void {
    this.historialComprasService.getHistorialesCompras().subscribe((data: any) => {


      this.historialCompras = data._embedded.compraRealizadas;
      this.listCompras = [];
      let listProductos: any[] = [];

      for(let i = 0; i < this.historialCompras.length; i++){
        // obtengo la lista de productos de cada compra

        this.historialComprasService.getProductosCompra(this.historialCompras[i]._links.cantidadXProductos.href).subscribe((data: any) => {
          //console.log("lista productos: ");
          //console.log(data._embedded.cantidadXProductoes);
          //listProductos = data._embedded.cantidadXProductos;

          //obtengo el producto de cada compra
          for(let j = 0; j < data._embedded.cantidadXProductoes.length; j++){
            let productoMostrar = {
              nombre: "",
              precio: 0,
              cantidad: 0
            };

            this.productoService.getProducto(data._embedded.cantidadXProductoes[j]._embedded.publicacion.id).subscribe((productoObj: any) => {
              console.log("nombre producto: " + productoObj.nombre);
              console.log("precio producto: " + productoObj.precioTotal);

              productoMostrar.nombre = productoObj.nombre;
              productoMostrar.precio = productoObj.precioTotal;
              //productoMostrar.cantidad = data._embedded.cantidadXProductos.cantidad;

            });
            console.log("cantidad producto: " + data._embedded.cantidadXProductoes[j].cantidad);
            productoMostrar.cantidad = data._embedded.cantidadXProductoes[j].cantidad;

            listProductos.push(productoMostrar);
          }
          console.log("lista productos: ");
          console.log(listProductos);

        });

        let compra = {
          //compraId: this.historialCompras[i].comprareali_id,
          fecha: this.historialCompras[i].fecha,
          total: this.historialCompras[i].precioTotal,
          productos: listProductos,
          metodoPago: this.historialCompras[i].metodoPago,
          tienda: this.historialCompras[i].tienda,
          direccionEnvio: this.historialCompras[i].direccionEnvio
        }

        console.log("compra completa para mostrar: ");
        console.log(compra);

        this.listCompras.push(compra);
      }

      if(this.listCompras != null || this.listCompras != undefined){
        this.mostrarHistorial = true;
      }

      console.log("historial compras: ");
      console.log(this.historialCompras);

    })
  }

}
