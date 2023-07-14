import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongKeSoLieuComponent } from './thong-ke-so-lieu.component';

describe('ThongKeSoLieuComponent', () => {
  let component: ThongKeSoLieuComponent;
  let fixture: ComponentFixture<ThongKeSoLieuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThongKeSoLieuComponent]
    });
    fixture = TestBed.createComponent(ThongKeSoLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
