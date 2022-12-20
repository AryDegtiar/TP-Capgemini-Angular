import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralModule } from './general/general.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { ProductosModule } from './productos/productos.module';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CarritoComponent,
    InicioComponent,
    HistorialComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GeneralModule,
    ProductosModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
