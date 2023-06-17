import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyBaoCaoComponent } from './quan-ly-bao-cao.component';

describe('QuanLyBaoCaoComponent', () => {
  let component: QuanLyBaoCaoComponent;
  let fixture: ComponentFixture<QuanLyBaoCaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuanLyBaoCaoComponent]
    });
    fixture = TestBed.createComponent(QuanLyBaoCaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
