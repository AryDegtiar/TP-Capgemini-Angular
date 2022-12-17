import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponentService } from './login-service/login-component.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string =  "";
  router: any;

  constructor(private loginComponentService: LoginComponentService) { }

  ngOnInit(): void {
  }

  logIn(datosLogIn:any){
    datosLogIn.preventDefault();

    this.email = datosLogIn.target[0].value;
    this.password = datosLogIn.target[1].value;

    this.loginComponentService.buscarUsuario(this.email, this.password);

    this.loginComponentService.getBusqueda().subscribe((usu: any) => {
      console.log(usu);

      localStorage.setItem('usuario', JSON.stringify(usu));

      console.log("usuario guardado en local storage");
      //this.router.navigate(['inicio']); // QUIRO QUE FUNQUE JEJE
      //this.router.navigate(['/inicio'])
    });


  }
}
