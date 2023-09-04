import { TestBed } from '@angular/core/testing';

import { ApiDanhMucService } from './api-danh-muc.service';

describe('ApiDanhMucService', () => {
  let service: ApiDanhMucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDanhMucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
