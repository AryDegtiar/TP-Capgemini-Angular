import { TestBed } from '@angular/core/testing';

import { VisibilidadFooterComponentService } from './visibilidad-footer-component.service';

describe('VisibilidadFooterComponentService', () => {
  let service: VisibilidadFooterComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilidadFooterComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
