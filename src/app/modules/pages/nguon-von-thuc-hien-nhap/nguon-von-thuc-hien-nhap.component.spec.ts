import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguonVonThucHienNhapComponent } from './nguon-von-thuc-hien-nhap.component';

describe('NguonVonThucHienNhapComponent', () => {
  let component: NguonVonThucHienNhapComponent;
  let fixture: ComponentFixture<NguonVonThucHienNhapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NguonVonThucHienNhapComponent]
    });
    fixture = TestBed.createComponent(NguonVonThucHienNhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
