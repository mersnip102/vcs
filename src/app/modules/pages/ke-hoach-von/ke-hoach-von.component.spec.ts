import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeHoachVonComponent } from './ke-hoach-von.component';

describe('KeHoachVonComponent', () => {
  let component: KeHoachVonComponent;
  let fixture: ComponentFixture<KeHoachVonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeHoachVonComponent]
    });
    fixture = TestBed.createComponent(KeHoachVonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
