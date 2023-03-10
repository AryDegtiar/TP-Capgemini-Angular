import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { CarritoComponentService } from 'src/app/carrito/carrito-service/carrito-component.service';
import { LoginComponentService } from 'src/app/login/login-service/login-component.service';
import { NarbarComponentService } from './navbar-service/narbar-component.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NavbarComponent implements OnInit {
  usuario?: any;

  categorias: any;

  totalItems : number = 0;

  estaVisibleLogInSignUp: boolean = true;
  estaVisibleUsuario: boolean = false;

  constructor(private navbarService: NarbarComponentService,private cdr: ChangeDetectorRef,
    private logInService: LoginComponentService,
    private cartService: CarritoComponentService,
    private router: Router,
    private location: Location,
    @Inject(DOCUMENT) document: any) { }

  ngOnInit(): void {
    this.navbarService.getCategorias().subscribe((data: any) => {
      console.log(data);
      this.categorias = data._embedded.categorias;
      console.log("categorias:");
      console.log(this.categorias);
      this.cdr.detectChanges();
    });

    this.cartService.getProducts().subscribe((data: any) => {
      this.totalItems = 0;
      for (let i = 0; i < data.length; i++) {
        this.totalItems += data[i].cantidad;
      }

      this.cdr.detectChanges();
    });

    // si al cargar la pagina ya estaba logeado que se cambie a logeado
    this.cambiarALogInSignUp();
    // si se logea o se registra que se cambie a logeado
    this.logInService.nuevaSesion.subscribe((data: any) => {
      console.log("nueva sesion");
      this.cambiarALogInSignUp();
    });

  }

  cambiarALogInSignUp(){
    if(localStorage.getItem('usuario') == null) {
      this.estaVisibleLogInSignUp = true;
      this.estaVisibleUsuario = false;
      console.log("usuario null");
    }else{
      this.estaVisibleLogInSignUp = false;
      this.estaVisibleUsuario = true;
      this.usuario = localStorage.getItem("usuario");
      console.log("usuario no null");
    }
  }

  logOut() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('carrito');
    this.estaVisibleLogInSignUp = true;
    this.estaVisibleUsuario = false;

    this.cartService.removeAllCart();

    //how to use router in angular
    this.router.navigate(['inicio']);
  }

  buscar(inputValue:any){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    let urlModified = this.location.path();
    if(urlModified.includes('productos')){
      if(urlModified.includes('buscar')){
        urlModified = urlModified.split('buscar')[0];
      }
      console.log(urlModified + "/buscar/" + inputValue);
      this.router.navigate([urlModified + "/buscar/" + inputValue]);
    }else{
      this.router.navigate(['productos/buscar/', inputValue]);
    }
  }

}
