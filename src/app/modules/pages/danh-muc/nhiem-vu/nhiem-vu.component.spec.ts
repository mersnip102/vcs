import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhiemVuComponent } from './nhiem-vu.component';

describe('NhiemVuComponent', () => {
  let component: NhiemVuComponent;
  let fixture: ComponentFixture<NhiemVuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NhiemVuComponent]
    });
    fixture = TestBed.createComponent(NhiemVuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
