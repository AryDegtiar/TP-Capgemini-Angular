import { TestBed } from '@angular/core/testing';

import { HistorialComponentServiceService } from './historial-component-service.service';

describe('HistorialComponentServiceService', () => {
  let service: HistorialComponentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialComponentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
