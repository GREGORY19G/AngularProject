import { TestBed } from '@angular/core/testing';

import { ReservateService } from './reservate.service';

describe('ReservateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservateService = TestBed.get(ReservateService);
    expect(service).toBeTruthy();
  });
});
