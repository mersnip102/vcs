import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaoCaoHinhAnhRoutingModule } from './bao-cao-hinh-anh-routing.module';
import { BaoCaoHinhAnhComponent } from './bao-cao-hinh-anh.component';
import { DuyetBaoCaoComponent } from './duyet-bao-cao/duyet-bao-cao.component';
import { TraCuuPAKNComponent } from './tra-cuu-pakn/tra-cuu-pakn.component';
import { LapBaoCaoComponent } from './lap-bao-cao/lap-bao-cao.component';
import { QuanLyBaoCaoComponent } from './quan-ly-bao-cao/quan-ly-bao-cao.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { GoogleMapsModule } from '@angular/google-maps';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { QuillConfigModule, QuillModule } from 'ngx-quill';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key: any) => antDesignIcons[key])
@NgModule({
  declarations: [
    BaoCaoHinhAnhComponent,
    DuyetBaoCaoComponent,
    TraCuuPAKNComponent,
    LapBaoCaoComponent,
    QuanLyBaoCaoComponent
  ],
  imports: [
    CommonModule,
    BaoCaoHinhAnhRoutingModule,

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

    NgxExtendedPdfViewerModule,
    QuillModule
    // QuillConfigModule.forRoot({
    //   modules: {
    //     syntax: true,
    //     toolbar: [...]
    //   }
    // })
    
   
  ]
})
export class BaoCaoHinhAnhModule { }
