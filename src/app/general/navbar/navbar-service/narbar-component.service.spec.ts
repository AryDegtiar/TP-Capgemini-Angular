import { TestBed } from '@angular/core/testing';

import { NarbarComponentService } from './narbar-component.service';

describe('NarbarComponentService', () => {
  let service: NarbarComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NarbarComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
