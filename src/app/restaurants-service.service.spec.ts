import { TestBed } from '@angular/core/testing';

import { RestaurantsServiceService } from './restaurants-service.service';

describe('RestaurantsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantsServiceService = TestBed.get(RestaurantsServiceService);
    expect(service).toBeTruthy();
  });
});
