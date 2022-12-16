import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNavbarComponent } from './item-navbar.component';

describe('ItemNavbarComponent', () => {
  let component: ItemNavbarComponent;
  let fixture: ComponentFixture<ItemNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
