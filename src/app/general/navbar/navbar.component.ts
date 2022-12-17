import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoginComponentService } from 'src/app/login/login-service/login-component.service';
import { NarbarComponentService } from './navbar-service/narbar-component.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NavbarComponent implements OnInit, AfterViewInit {
  usuario?: any;

  categorias: any;

  estaVisibleLogInSignUp: boolean = true;
  estaVisibleUsuario: boolean = false;

  constructor(private navbarService: NarbarComponentService,private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.cambiarALogInSignUp();
  }

  ngOnInit(): void {
    this.navbarService.getCategorias().subscribe((data: any) => {
      console.log(data);
      this.categorias = data._embedded.categorias;
      console.log("categorias:" + this.categorias);
      this.cdr.detectChanges();
    });

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
