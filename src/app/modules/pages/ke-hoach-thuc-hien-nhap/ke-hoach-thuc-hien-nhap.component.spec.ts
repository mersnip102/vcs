import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeHoachThucHienNhapComponent } from './ke-hoach-thuc-hien-nhap.component';

describe('KeHoachThucHienNhapComponent', () => {
  let component: KeHoachThucHienNhapComponent;
  let fixture: ComponentFixture<KeHoachThucHienNhapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeHoachThucHienNhapComponent]
    });
    fixture = TestBed.createComponent(KeHoachThucHienNhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
