import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ItemProductoComponent {
  @Input() producto: any = null;

}
