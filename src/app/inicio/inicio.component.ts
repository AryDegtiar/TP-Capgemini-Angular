import { Component, OnInit } from '@angular/core';
import { VisibilidadFooterComponentService } from '../general/footer/visibilidad-footer/visibilidad-footer-component.service';
import { VisibilidadNavbarComponentService } from '../general/navbar/visibilidad-navbar/visibilidad-navbar-component.service';

@Component({
  templateUrl: './inicio.component.html',
  styleUrls: [
    './inicio.component.css',
    './inicio.component-animations.css',
    './inicio.component-bg-Animation.css',
  ],
})
export class InicioComponent implements OnInit {
  constructor(
    private visibilidadNavBar: VisibilidadNavbarComponentService,
    private visibilidadFooter: VisibilidadFooterComponentService
  ) {

  }

  ngOnInit(): void {
    this.visibilidadNavBar.setComponenteVisible(true);
    this.visibilidadFooter.mostrarComponente();
  }
}
