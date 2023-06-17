import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoHinhAnhComponent } from './bao-cao-hinh-anh.component';

describe('BaoCaoHinhAnhComponent', () => {
  let component: BaoCaoHinhAnhComponent;
  let fixture: ComponentFixture<BaoCaoHinhAnhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaoCaoHinhAnhComponent]
    });
    fixture = TestBed.createComponent(BaoCaoHinhAnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
