import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomNguoiDungComponent } from './nhom-nguoi-dung.component';

describe('NhomNguoiDungComponent', () => {
  let component: NhomNguoiDungComponent;
  let fixture: ComponentFixture<NhomNguoiDungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NhomNguoiDungComponent]
    });
    fixture = TestBed.createComponent(NhomNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
