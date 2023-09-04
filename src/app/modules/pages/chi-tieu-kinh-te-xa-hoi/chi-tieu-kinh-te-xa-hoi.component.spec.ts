import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTieuKinhTeXaHoiComponent } from './chi-tieu-kinh-te-xa-hoi.component';

describe('ChiTieuKinhTeXaHoiComponent', () => {
  let component: ChiTieuKinhTeXaHoiComponent;
  let fixture: ComponentFixture<ChiTieuKinhTeXaHoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiTieuKinhTeXaHoiComponent]
    });
    fixture = TestBed.createComponent(ChiTieuKinhTeXaHoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
