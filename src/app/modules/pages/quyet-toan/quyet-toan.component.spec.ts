import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuyetToanComponent } from './quyet-toan.component';

describe('QuyetToanComponent', () => {
  let component: QuyetToanComponent;
  let fixture: ComponentFixture<QuyetToanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuyetToanComponent]
    });
    fixture = TestBed.createComponent(QuyetToanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
