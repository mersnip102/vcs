import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';

import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { ApiInterceptor } from './core/interceptor/api.interceptor';


//Ng-Zorro
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { PagesRoutingModule } from './modules/pages/pages-routing.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';


import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';

import { GoogleMapsModule } from '@angular/google-maps';
import { DxChartModule } from 'devextreme-angular';
import { API_BASE_URL } from './services/proxies/proxies.service';
import { AppConsts } from './shared/constants';
import { BeforeUnloadServiceService } from './services/beforeUnload/before-unload-service.service';


registerLocaleData(en);
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key: any) => antDesignIcons[key])
@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    
    BrowserModule,
   
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, NzEmptyModule, NzTableModule, NzUploadModule,

    CommonModule,
    PagesRoutingModule,
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

    NzLayoutModule,
    NzMenuModule,
    RouterModule,

    GoogleMapsModule,
    DxChartModule
    
    
  ],
 
  providers: [{ provide: NZ_I18N, useValue: en_US },
    BeforeUnloadServiceService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ApiInterceptor,
    //   multi: true,
    // },
    { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: API_BASE_URL, useFactory: () => AppConsts.remoteServiceBaseUrl }, ],
    
    
    
  bootstrap: [AppComponent]
})
export class AppModule { }
