import { TestBed } from '@angular/core/testing';

import { MaphilightService } from './maphilight.service';

describe('MaphilightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaphilightService = TestBed.get(MaphilightService);
    expect(service).toBeTruthy();
  });
});
