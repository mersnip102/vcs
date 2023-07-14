import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoKetQuaComponent } from './bao-cao-ket-qua.component';

describe('BaoCaoKetQuaComponent', () => {
  let component: BaoCaoKetQuaComponent;
  let fixture: ComponentFixture<BaoCaoKetQuaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaoCaoKetQuaComponent]
    });
    fixture = TestBed.createComponent(BaoCaoKetQuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
