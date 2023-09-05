import { TestBed } from '@angular/core/testing';

import { X1Service } from './x1.service';

describe('X1Service', () => {
  let service: X1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(X1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
