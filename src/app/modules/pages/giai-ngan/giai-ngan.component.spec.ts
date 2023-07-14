import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaiNganComponent } from './giai-ngan.component';

describe('GiaiNganComponent', () => {
  let component: GiaiNganComponent;
  let fixture: ComponentFixture<GiaiNganComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiaiNganComponent]
    });
    fixture = TestBed.createComponent(GiaiNganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
