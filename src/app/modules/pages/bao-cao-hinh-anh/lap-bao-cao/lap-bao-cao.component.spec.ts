import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapBaoCaoComponent } from './lap-bao-cao.component';

describe('LapBaoCaoComponent', () => {
  let component: LapBaoCaoComponent;
  let fixture: ComponentFixture<LapBaoCaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LapBaoCaoComponent]
    });
    fixture = TestBed.createComponent(LapBaoCaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
