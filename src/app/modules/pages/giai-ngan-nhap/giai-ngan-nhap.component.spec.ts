import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaiNganNhapComponent } from './giai-ngan-nhap.component';

describe('GiaiNganNhapComponent', () => {
  let component: GiaiNganNhapComponent;
  let fixture: ComponentFixture<GiaiNganNhapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiaiNganNhapComponent]
    });
    fixture = TestBed.createComponent(GiaiNganNhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
