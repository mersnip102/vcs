import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyPhanQuyenComponent } from './quan-ly-phan-quyen.component';

describe('QuanLyPhanQuyenComponent', () => {
  let component: QuanLyPhanQuyenComponent;
  let fixture: ComponentFixture<QuanLyPhanQuyenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuanLyPhanQuyenComponent]
    });
    fixture = TestBed.createComponent(QuanLyPhanQuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
