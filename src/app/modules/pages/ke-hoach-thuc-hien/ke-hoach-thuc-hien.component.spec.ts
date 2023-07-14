import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeHoachThucHienComponent } from './ke-hoach-thuc-hien.component';

describe('KeHoachThucHienComponent', () => {
  let component: KeHoachThucHienComponent;
  let fixture: ComponentFixture<KeHoachThucHienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeHoachThucHienComponent]
    });
    fixture = TestBed.createComponent(KeHoachThucHienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
