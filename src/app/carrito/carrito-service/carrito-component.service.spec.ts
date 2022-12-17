import { TestBed } from '@angular/core/testing';

import { CarritoComponentService } from './carrito-component.service';

describe('CarritoComponentService', () => {
  let service: CarritoComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
