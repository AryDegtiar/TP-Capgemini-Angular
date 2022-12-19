import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-navbar',
  templateUrl: './item-navbar.component.html',
  styleUrls: ['./item-navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ItemNavbarComponent {
  @Input() categoria: any = null;

  constructor(private router: Router) { }

  redirigirAProducto(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['productos/all/', this.categoria.id]);
  }
}
