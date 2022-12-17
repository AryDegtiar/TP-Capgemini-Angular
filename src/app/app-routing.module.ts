import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },
  {path: 'carrito', component: CarritoComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
