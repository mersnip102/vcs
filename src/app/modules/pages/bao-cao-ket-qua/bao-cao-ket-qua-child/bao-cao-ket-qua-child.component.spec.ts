import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoKetQuaChildComponent } from './bao-cao-ket-qua-child.component';

describe('BaoCaoKetQuaChildComponent', () => {
  let component: BaoCaoKetQuaChildComponent;
  let fixture: ComponentFixture<BaoCaoKetQuaChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaoCaoKetQuaChildComponent]
    });
    fixture = TestBed.createComponent(BaoCaoKetQuaChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
