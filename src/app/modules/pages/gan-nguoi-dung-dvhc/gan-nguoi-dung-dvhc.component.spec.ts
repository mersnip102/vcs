import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanNguoiDungDvhcComponent } from './gan-nguoi-dung-dvhc.component';

describe('GanNguoiDungDvhcComponent', () => {
  let component: GanNguoiDungDvhcComponent;
  let fixture: ComponentFixture<GanNguoiDungDvhcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GanNguoiDungDvhcComponent]
    });
    fixture = TestBed.createComponent(GanNguoiDungDvhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
