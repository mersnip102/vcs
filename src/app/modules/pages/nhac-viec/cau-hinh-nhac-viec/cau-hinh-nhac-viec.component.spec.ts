import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauHinhNhacViecComponent } from './cau-hinh-nhac-viec.component';

describe('CauHinhNhacViecComponent', () => {
  let component: CauHinhNhacViecComponent;
  let fixture: ComponentFixture<CauHinhNhacViecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CauHinhNhacViecComponent]
    });
    fixture = TestBed.createComponent(CauHinhNhacViecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
