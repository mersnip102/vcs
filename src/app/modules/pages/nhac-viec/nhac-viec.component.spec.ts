import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhacViecComponent } from './nhac-viec.component';

describe('NhacViecComponent', () => {
  let component: NhacViecComponent;
  let fixture: ComponentFixture<NhacViecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NhacViecComponent]
    });
    fixture = TestBed.createComponent(NhacViecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
