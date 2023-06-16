import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Ng-Zorro
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
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
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { HomeComponent } from './home/home.component';
import { KeHoachVonComponent } from './ke-hoach-von/ke-hoach-von.component';
import { HighchartsChartModule } from 'highcharts-angular';

import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { LayoutModule } from 'src/app/layout/layout.module';
import { DonViSuDungComponent } from './don-vi-su-dung/don-vi-su-dung.component';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NhomNguoiDungComponent } from './nhom-nguoi-dung/nhom-nguoi-dung.component';
import { QuanLyPhanQuyenComponent } from './quan-ly-phan-quyen/quan-ly-phan-quyen.component';
import { QuanLyDoiTuongComponent } from './quan-ly-doi-tuong/quan-ly-doi-tuong.component';
import { QuanLyThongBaoComponent } from './quan-ly-thong-bao/quan-ly-thong-bao.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { GanNguoiDungDvhcComponent } from './gan-nguoi-dung-dvhc/gan-nguoi-dung-dvhc.component';
import { ConfigsComponent } from './configs/configs.component';
import { LogsComponent } from './logs/logs.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key: any) => antDesignIcons[key])
@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    KeHoachVonComponent,
    DonViSuDungComponent,
    ChangePasswordComponent,
    NhomNguoiDungComponent,
    QuanLyPhanQuyenComponent,
    QuanLyDoiTuongComponent,
    QuanLyThongBaoComponent,
    UserinfoComponent,
    GanNguoiDungDvhcComponent,
    ConfigsComponent,
    LogsComponent
  ],
  imports: [
    LayoutModule,
    CommonModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBI0DTl9QdF8NjI1g7P3TDvG0wwbjBPfwU',
    //   libraries: ["places", "geometry"]
    // }),
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

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
   
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }]
})
export class PagesModule { }
