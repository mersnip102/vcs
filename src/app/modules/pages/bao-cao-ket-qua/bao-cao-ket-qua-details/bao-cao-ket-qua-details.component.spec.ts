import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoKetQuaDetailsComponent } from './bao-cao-ket-qua-details.component';

describe('BaoCaoKetQuaDetailsComponent', () => {
  let component: BaoCaoKetQuaDetailsComponent;
  let fixture: ComponentFixture<BaoCaoKetQuaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaoCaoKetQuaDetailsComponent]
    });
    fixture = TestBed.createComponent(BaoCaoKetQuaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
