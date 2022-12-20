import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginComponentService } from '../login/login-service/login-component.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit{
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private logInService: LoginComponentService) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(){
    this.formulario = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get mail() { return this.formulario.get('mail'); }
  get contrasenia() { return this.formulario.get('contrasenia'); }

  registrar(){
    console.log("Registrando usuario");
    console.log(this.formulario.value);
    this.logInService.registrarse(this.formulario.value).subscribe((response: any) => {
        console.log(response);

          Swal.fire({
            title: 'Registro exitoso',
            text: 'Se ha registrado exitosamente, por favor inicie sesión',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
          this.router.navigate(['/login']);
      }, (error: any) => {
        console.log(error);
        Swal.fire({
          title: 'Error',
          text: 'No se ha podido registrar el usuario',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
    });
  }

}
