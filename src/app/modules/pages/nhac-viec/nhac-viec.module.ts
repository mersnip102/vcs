import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NhacViecRoutingModule } from './nhac-viec-routing.module';
import { NhacViecComponent } from './nhac-viec.component';

import { LayoutModule } from 'src/app/layout/layout.module';
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
import { CauHinhNhacViecComponent } from './cau-hinh-nhac-viec/cau-hinh-nhac-viec.component';
import { DuyetNhacViecComponent } from './duyet-nhac-viec/duyet-nhac-viec.component';
import { XemNhacViecComponent } from './xem-nhac-viec/xem-nhac-viec.component';
import { ThongKeNhacViecComponent } from './thong-ke-nhac-viec/thong-ke-nhac-viec.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key: any) => antDesignIcons[key])


@NgModule({
  declarations: [
    NhacViecComponent,
    CauHinhNhacViecComponent,
    DuyetNhacViecComponent,
    XemNhacViecComponent,
    ThongKeNhacViecComponent
  ],
  imports: [
    CommonModule,
    NhacViecRoutingModule,

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
export class NhacViecModule { }
