import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ItemProductoComponent } from './item-producto/item-producto.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListadoProductosComponent,
    ItemProductoComponent,
    VistaProductoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
