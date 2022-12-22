import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponentService } from './login-service/login-component.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LoginComponent implements OnInit {

  constructor(private loginComponentService: LoginComponentService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn(datosLogIn:any){
    datosLogIn.preventDefault();

    const usu ={
      mail: datosLogIn.target[0].value,
      contrasenia: datosLogIn.target[1].value
    }

    console.log("usuario" , usu)

    this.loginComponentService.buscarUsuario(usu).subscribe((usu: any) => {
      console.log(usu);

      localStorage.setItem('usuario', JSON.stringify(usu));

      console.log("usuario guardado en local storage");

      this.loginComponentService.notificar();

      this.router.navigate(['inicio']);
    });

  }
}
