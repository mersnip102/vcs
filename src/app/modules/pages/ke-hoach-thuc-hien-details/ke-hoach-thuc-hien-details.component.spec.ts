import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeHoachThucHienDetailsComponent } from './ke-hoach-thuc-hien-details.component';

describe('KeHoachThucHienDetailsComponent', () => {
  let component: KeHoachThucHienDetailsComponent;
  let fixture: ComponentFixture<KeHoachThucHienDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeHoachThucHienDetailsComponent]
    });
    fixture = TestBed.createComponent(KeHoachThucHienDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
