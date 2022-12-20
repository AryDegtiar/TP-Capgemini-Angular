import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';

const routes: Routes = [
  { path: '', component: ListadoProductosComponent },
  { path: 'vista/:id', component: VistaProductoComponent },
  { path: 'all', component: ListadoProductosComponent },
  { path: 'all/:categoriaId', component: ListadoProductosComponent },
  { path: 'buscar/:buscadorInput', component: ListadoProductosComponent},
  { path: 'all/:categoriaId/buscar/:buscadorInput', component: ListadoProductosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
