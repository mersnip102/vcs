import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { ComponentComponent } from './component.component';
import { Table3ColumnsComponent } from './table3-columns/table3-columns.component';
import { Table8ColumnsComponent } from './table8-columns/table8-columns.component';
import { Modal2TabsComponent } from './modal2-tabs/modal2-tabs.component';


@NgModule({
  declarations: [
    ComponentComponent,
    Table3ColumnsComponent,
    Table8ColumnsComponent,
    Modal2TabsComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
