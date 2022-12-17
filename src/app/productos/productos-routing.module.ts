import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';

const routes: Routes = [
  { path: '', component: ListadoProductosComponent },
  { path: 'vista/:id', component: VistaProductoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
