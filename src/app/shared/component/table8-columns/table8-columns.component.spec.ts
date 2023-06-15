import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table8ColumnsComponent } from './table8-columns.component';

describe('Table8ColumnsComponent', () => {
  let component: Table8ColumnsComponent;
  let fixture: ComponentFixture<Table8ColumnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table8ColumnsComponent]
    });
    fixture = TestBed.createComponent(Table8ColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
