import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucComponent } from './danh-muc.component';

describe('DanhMucComponent', () => {
  let component: DanhMucComponent;
  let fixture: ComponentFixture<DanhMucComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhMucComponent]
    });
    fixture = TestBed.createComponent(DanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
