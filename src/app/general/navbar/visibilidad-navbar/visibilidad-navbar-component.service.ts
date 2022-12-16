import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadNavbarComponentService {
  private componenteVisible: boolean;
  cambioDeVisibilidad: EventEmitter<boolean>;

  constructor() {
    this.componenteVisible = true;
    this.cambioDeVisibilidad = new EventEmitter<boolean>();
  }

  setComponenteVisible(estado: boolean): void {
    this.componenteVisible = estado;
    this.notificarCambioEstadoComponente();
  }

  notificarCambioEstadoComponente(): void {
    this.cambioDeVisibilidad.emit(this.componenteVisible);
  }

}
