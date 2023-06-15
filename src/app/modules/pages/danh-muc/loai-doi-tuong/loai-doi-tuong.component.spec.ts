import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiDoiTuongComponent } from './loai-doi-tuong.component';

describe('LoaiDoiTuongComponent', () => {
  let component: LoaiDoiTuongComponent;
  let fixture: ComponentFixture<LoaiDoiTuongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaiDoiTuongComponent]
    });
    fixture = TestBed.createComponent(LoaiDoiTuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
