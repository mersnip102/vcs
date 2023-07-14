import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanBoVonComponent } from './phan-bo-von.component';

describe('PhanBoVonComponent', () => {
  let component: PhanBoVonComponent;
  let fixture: ComponentFixture<PhanBoVonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhanBoVonComponent]
    });
    fixture = TestBed.createComponent(PhanBoVonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
