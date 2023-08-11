import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaReportComponent } from './ket-qua-report.component';

describe('KetQuaReportComponent', () => {
  let component: KetQuaReportComponent;
  let fixture: ComponentFixture<KetQuaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KetQuaReportComponent]
    });
    fixture = TestBed.createComponent(KetQuaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
