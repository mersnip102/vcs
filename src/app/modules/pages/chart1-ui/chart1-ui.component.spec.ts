import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart1UIComponent } from './chart1-ui.component';

describe('Chart1UIComponent', () => {
  let component: Chart1UIComponent;
  let fixture: ComponentFixture<Chart1UIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chart1UIComponent]
    });
    fixture = TestBed.createComponent(Chart1UIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
