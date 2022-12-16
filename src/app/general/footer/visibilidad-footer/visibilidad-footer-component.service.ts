import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VisibilidadFooterComponentService {
  private componenteVisible: boolean;
  cambioDeVisibilidad: EventEmitter<boolean>;

  constructor() {
    this.componenteVisible = false;
    this.cambioDeVisibilidad = new EventEmitter<boolean>();
  }

ocultarComponente(): void {
    this.componenteVisible = false;
    this.notificarCambioEstadoComponente();
  }

  mostrarComponente(): void {
    this.componenteVisible = true;
    this.notificarCambioEstadoComponente();
  }

  notificarCambioEstadoComponente(): void {
    this.cambioDeVisibilidad.emit(this.componenteVisible);
  }
}
