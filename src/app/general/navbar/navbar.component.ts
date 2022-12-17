import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CarritoComponentService } from 'src/app/carrito/carrito-service/carrito-component.service';
import { LoginComponentService } from 'src/app/login/login-service/login-component.service';
import { NarbarComponentService } from './navbar-service/narbar-component.service';


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
    private cartService: CarritoComponentService) { }

  ngOnInit(): void {
    this.navbarService.getCategorias().subscribe((data: any) => {
      console.log(data);
      this.categorias = data._embedded.categorias;
      console.log("categorias:" + this.categorias);
      this.cdr.detectChanges();
    });

    this.cartService.getProducts().subscribe((data: any) => {
      this.totalItems = 0;
      for (let i = 0; i < data.length; i++) {
        this.totalItems += data[i].cantidad;
      }

      this.cdr.detectChanges();
    });

    /*
    this.logInService.getBusqueda().subscribe((data: any) => {
      console.log("ENTREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
      this.cambiarALogInSignUp();
      this.cdr.detectChanges();
    });
*/

    this.cambiarALogInSignUp();

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
    this.estaVisibleLogInSignUp = true;
    this.estaVisibleUsuario = false;
  }

}
