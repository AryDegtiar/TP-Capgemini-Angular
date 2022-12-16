import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { VisibilidadFooterComponentService } from './visibilidad-footer/visibilidad-footer-component.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  estaVisible: boolean;

  constructor( private visibilidadFooter: VisibilidadFooterComponentService ) {
    this.estaVisible = true;
  }

  ngOnInit(): void {
    this.visibilidadFooter.cambioDeVisibilidad.subscribe(
      (estado: boolean) => {
        this.estaVisible = estado;
      }
    );
  }


}
