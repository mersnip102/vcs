import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhMucRoutingModule } from './danh-muc-routing.module';
import { DanhMucComponent } from './danh-muc.component';
import { ChucDanhComponent } from './chuc-danh/chuc-danh.component';
import { SuKienComponent } from './su-kien/su-kien.component';
import { NhiemVuComponent } from './nhiem-vu/nhiem-vu.component';
import { LoaiDoiTuongComponent } from './loai-doi-tuong/loai-doi-tuong.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CommonTableComponent } from './common-table/common-table.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HighchartsChartModule } from 'highcharts-angular';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key: any) => antDesignIcons[key])
@NgModule({
  declarations: [
    DanhMucComponent,
    ChucDanhComponent,
    SuKienComponent,
    NhiemVuComponent,
    LoaiDoiTuongComponent,
    CommonTableComponent
  ],
  imports: [
    LayoutModule,
    CommonModule,
    DanhMucRoutingModule,

    NzMenuModule,
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
    NzIconModule.forRoot(icons),
    NzAvatarModule,
    NzTreeModule,
    NzToolTipModule,

    HighchartsChartModule,

    GoogleMapsModule ,

    NgxExtendedPdfViewerModule
  ]
})
export class DanhMucModule { }
