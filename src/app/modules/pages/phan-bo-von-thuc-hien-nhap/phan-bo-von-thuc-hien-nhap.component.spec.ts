import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanBoVonThucHienNhapComponent } from './phan-bo-von-thuc-hien-nhap.component';

describe('PhanBoVonThucHienNhapComponent', () => {
  let component: PhanBoVonThucHienNhapComponent;
  let fixture: ComponentFixture<PhanBoVonThucHienNhapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhanBoVonThucHienNhapComponent]
    });
    fixture = TestBed.createComponent(PhanBoVonThucHienNhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
