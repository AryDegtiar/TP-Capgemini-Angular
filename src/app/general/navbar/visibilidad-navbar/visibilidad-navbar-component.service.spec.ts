import { TestBed } from '@angular/core/testing';

import { VisibilidadNavbarComponentService } from './visibilidad-navbar-component.service';

describe('VisibilidadNavbarComponentService', () => {
  let service: VisibilidadNavbarComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilidadNavbarComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
