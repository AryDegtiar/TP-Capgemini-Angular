import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
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
    });

    //quiero redirigir

  }
}
