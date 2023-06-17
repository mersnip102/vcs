import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetBaoCaoComponent } from './duyet-bao-cao.component';

describe('DuyetBaoCaoComponent', () => {
  let component: DuyetBaoCaoComponent;
  let fixture: ComponentFixture<DuyetBaoCaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuyetBaoCaoComponent]
    });
    fixture = TestBed.createComponent(DuyetBaoCaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
