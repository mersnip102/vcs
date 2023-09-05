import { TestBed } from '@angular/core/testing';

import { Y1Service } from './y1.service';

describe('Y1Service', () => {
  let service: Y1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Y1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
