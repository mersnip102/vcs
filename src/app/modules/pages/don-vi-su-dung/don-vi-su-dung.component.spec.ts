import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonViSuDungComponent } from './don-vi-su-dung.component';

describe('DonViSuDungComponent', () => {
  let component: DonViSuDungComponent;
  let fixture: ComponentFixture<DonViSuDungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonViSuDungComponent]
    });
    fixture = TestBed.createComponent(DonViSuDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
