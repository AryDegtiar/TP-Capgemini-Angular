import { Component, OnInit } from '@angular/core';
import { VisibilidadFooterComponentService } from '../general/footer/visibilidad-footer/visibilidad-footer-component.service';
import { VisibilidadNavbarComponentService } from '../general/navbar/visibilidad-navbar/visibilidad-navbar-component.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private visibilidadFooterComponentService: VisibilidadFooterComponentService
  ) {}

  ngOnInit(): void {
    this.visibilidadFooterComponentService.ocultarComponente();
  }
}
