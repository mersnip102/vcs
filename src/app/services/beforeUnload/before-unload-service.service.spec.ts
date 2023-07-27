import { TestBed } from '@angular/core/testing';

import { BeforeUnloadServiceService } from './before-unload-service.service';

describe('BeforeUnloadServiceService', () => {
  let service: BeforeUnloadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeforeUnloadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
