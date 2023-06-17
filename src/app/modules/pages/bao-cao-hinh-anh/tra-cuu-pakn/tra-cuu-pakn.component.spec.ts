import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraCuuPAKNComponent } from './tra-cuu-pakn.component';

describe('TraCuuPAKNComponent', () => {
  let component: TraCuuPAKNComponent;
  let fixture: ComponentFixture<TraCuuPAKNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraCuuPAKNComponent]
    });
    fixture = TestBed.createComponent(TraCuuPAKNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
