import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal2TabsComponent } from './modal2-tabs.component';

describe('Modal2TabsComponent', () => {
  let component: Modal2TabsComponent;
  let fixture: ComponentFixture<Modal2TabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal2TabsComponent]
    });
    fixture = TestBed.createComponent(Modal2TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
