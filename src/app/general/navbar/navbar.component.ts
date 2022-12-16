import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NarbarComponentService } from './navbar-service/narbar-component.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  categorias: any;

  constructor(private navbarService: NarbarComponentService,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.navbarService.getCategorias().subscribe((data: any) => {
      console.log(data);
      this.categorias = data._embedded.categorias;
      console.log("categorias:" + this.categorias);
      this.cdr.detectChanges();
    })
  }

}
