import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table3ColumnsComponent } from './table3-columns.component';

describe('Table3ColumnsComponent', () => {
  let component: Table3ColumnsComponent;
  let fixture: ComponentFixture<Table3ColumnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table3ColumnsComponent]
    });
    fixture = TestBed.createComponent(Table3ColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
