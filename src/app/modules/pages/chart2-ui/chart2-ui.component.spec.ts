import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart2UIComponent } from './chart2-ui.component';

describe('Chart2UIComponent', () => {
  let component: Chart2UIComponent;
  let fixture: ComponentFixture<Chart2UIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chart2UIComponent]
    });
    fixture = TestBed.createComponent(Chart2UIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
