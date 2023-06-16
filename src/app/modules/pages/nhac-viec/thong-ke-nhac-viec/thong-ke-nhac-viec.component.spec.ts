import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongKeNhacViecComponent } from './thong-ke-nhac-viec.component';

describe('ThongKeNhacViecComponent', () => {
  let component: ThongKeNhacViecComponent;
  let fixture: ComponentFixture<ThongKeNhacViecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThongKeNhacViecComponent]
    });
    fixture = TestBed.createComponent(ThongKeNhacViecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
