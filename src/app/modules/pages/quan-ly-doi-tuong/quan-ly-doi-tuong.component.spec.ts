import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyDoiTuongComponent } from './quan-ly-doi-tuong.component';

describe('QuanLyDoiTuongComponent', () => {
  let component: QuanLyDoiTuongComponent;
  let fixture: ComponentFixture<QuanLyDoiTuongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuanLyDoiTuongComponent]
    });
    fixture = TestBed.createComponent(QuanLyDoiTuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
