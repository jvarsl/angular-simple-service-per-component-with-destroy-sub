import { TestBed } from '@angular/core/testing';

import { PerComponentService } from './per-component.service';

describe('PerComponentService', () => {
  let service: PerComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
