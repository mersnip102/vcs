import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaoCaoKetQuaRoutingModule } from './bao-cao-ket-qua-routing.module';
import { BaoCaoKetQuaComponent } from './bao-cao-ket-qua.component';
import { BaoCaoKetQuaChildComponent } from './bao-cao-ket-qua-child/bao-cao-ket-qua-child.component';
import { BaoCaoKetQuaDetailsComponent } from './bao-cao-ket-qua-details/bao-cao-ket-qua-details.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { PagesRoutingModule } from '../pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
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
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { HighchartsChartModule } from 'highcharts-angular';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DxChartModule } from 'devextreme-angular';

import * as AllIcons from '@ant-design/icons-angular/icons';

import { IconDefinition } from '@ant-design/icons-angular';
import { PagesModule } from '../pages.module';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key: any) => antDesignIcons[key])

@NgModule({
  declarations: [
    BaoCaoKetQuaComponent,
    BaoCaoKetQuaChildComponent,
    BaoCaoKetQuaDetailsComponent
  ],
  imports: [
    PagesModule,
    CommonModule,
    BaoCaoKetQuaRoutingModule,

    LayoutModule,
    CommonModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAkzMp9vyXtwqh4o6pAMzGal7IXUmuRgGU',
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
    NzSpinModule,

    HighchartsChartModule,

    GoogleMapsModule ,

    NgxExtendedPdfViewerModule,

    DxChartModule,
  ]
})
export class BaoCaoKetQuaModule { }
