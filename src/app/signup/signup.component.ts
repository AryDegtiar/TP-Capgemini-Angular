import { Component, OnInit } from '@angular/core';
import { VisibilidadFooterComponentService } from '../general/footer/visibilidad-footer/visibilidad-footer-component.service';
import { VisibilidadNavbarComponentService } from '../general/navbar/visibilidad-navbar/visibilidad-navbar-component.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit{
  constructor(
    private visibilidadFooterComponentService: VisibilidadFooterComponentService,
    private visibilidadNavbarComponentService: VisibilidadNavbarComponentService
  ) {}

  ngOnInit(): void {
    this.visibilidadFooterComponentService.ocultarComponente();
    this.visibilidadNavbarComponentService.setComponenteVisible(false);
  }
}
