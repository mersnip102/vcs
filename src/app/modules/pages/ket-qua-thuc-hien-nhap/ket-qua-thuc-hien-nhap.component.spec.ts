import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaThucHienNhapComponent } from './ket-qua-thuc-hien-nhap.component';

describe('KetQuaThucHienNhapComponent', () => {
  let component: KetQuaThucHienNhapComponent;
  let fixture: ComponentFixture<KetQuaThucHienNhapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KetQuaThucHienNhapComponent]
    });
    fixture = TestBed.createComponent(KetQuaThucHienNhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
