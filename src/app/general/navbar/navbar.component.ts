import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VisibilidadNavbarComponentService } from './visibilidad-navbar/visibilidad-navbar-component.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  estaVisible: boolean;

  constructor( private visibilidadNavbarComponentService: VisibilidadNavbarComponentService ) {
    this.estaVisible = true;
  }

  ngOnInit(): void {
    this.visibilidadNavbarComponentService.cambioDeVisibilidad.subscribe(
      (estado: boolean) => {
        this.estaVisible = estado;
      }
    );
  }

}
