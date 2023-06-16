import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetNhacViecComponent } from './duyet-nhac-viec.component';

describe('DuyetNhacViecComponent', () => {
  let component: DuyetNhacViecComponent;
  let fixture: ComponentFixture<DuyetNhacViecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuyetNhacViecComponent]
    });
    fixture = TestBed.createComponent(DuyetNhacViecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
