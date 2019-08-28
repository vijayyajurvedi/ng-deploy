import { TestBed } from '@angular/core/testing';

import { DisplaycomponentService } from './displaycomponent.service';

describe('DisplaycomponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplaycomponentService = TestBed.get(DisplaycomponentService);
    expect(service).toBeTruthy();
  });
});
