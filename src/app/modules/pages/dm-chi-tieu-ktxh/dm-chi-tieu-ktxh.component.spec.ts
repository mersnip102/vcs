import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmChiTieuKTXHComponent } from './dm-chi-tieu-ktxh.component';

describe('DmChiTieuKTXHComponent', () => {
  let component: DmChiTieuKTXHComponent;
  let fixture: ComponentFixture<DmChiTieuKTXHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DmChiTieuKTXHComponent]
    });
    fixture = TestBed.createComponent(DmChiTieuKTXHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
