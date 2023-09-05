import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { RouterModule } from '@angular/router';
//Ng-Zorro
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key: any) => antDesignIcons[key])
@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    BasicLayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,

    NzCardModule,
    NzDropDownModule,
    NzModalModule,
    NzDatePickerModule,
    NzPaginationModule,
    NzTableModule,
    NzInputModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NzRadioModule,
    NzTabsModule,
    NzPopoverModule,
    NzCheckboxModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NzCalendarModule,
    NzBadgeModule,
    NzTimePickerModule,
    NzSelectModule,
    NzUploadModule,
    NzImageModule,
    NzIconModule,
    NzBreadCrumbModule,

    NzLayoutModule,
    NzIconModule.forRoot(icons),
  ],
  exports: [FooterComponent, HeaderComponent, SidebarComponent, BasicLayoutComponent],
})
export class LayoutModule { }
