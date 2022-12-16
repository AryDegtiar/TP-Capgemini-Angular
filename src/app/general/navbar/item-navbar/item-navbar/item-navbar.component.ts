import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-item-navbar',
  templateUrl: './item-navbar.component.html',
  styleUrls: ['./item-navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ItemNavbarComponent {
  @Input() categoria: any = null;
}
