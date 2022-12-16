import { TestBed } from '@angular/core/testing';

import { ProductoComplementServiceService } from './producto-complement-service.service';

describe('ProductoComplementServiceService', () => {
  let service: ProductoComplementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoComplementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
