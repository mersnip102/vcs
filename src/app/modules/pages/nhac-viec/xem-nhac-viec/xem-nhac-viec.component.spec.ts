import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemNhacViecComponent } from './xem-nhac-viec.component';

describe('XemNhacViecComponent', () => {
  let component: XemNhacViecComponent;
  let fixture: ComponentFixture<XemNhacViecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XemNhacViecComponent]
    });
    fixture = TestBed.createComponent(XemNhacViecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
