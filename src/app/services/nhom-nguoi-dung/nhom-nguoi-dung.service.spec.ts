import { TestBed } from '@angular/core/testing';

import { NhomNguoiDungService } from './nhom-nguoi-dung.service';

describe('NhomNguoiDungService', () => {
  let service: NhomNguoiDungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NhomNguoiDungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
