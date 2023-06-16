import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NhacViecComponent } from './nhac-viec.component';
import { CauHinhNhacViecComponent } from './cau-hinh-nhac-viec/cau-hinh-nhac-viec.component';
import { ThongKeNhacViecComponent } from './thong-ke-nhac-viec/thong-ke-nhac-viec.component';
import { DuyetNhacViecComponent } from './duyet-nhac-viec/duyet-nhac-viec.component';
import { XemNhacViecComponent } from './xem-nhac-viec/xem-nhac-viec.component';

const routes: Routes = [{ path: '', component: NhacViecComponent, children: [
  {
    path: 'cau-hinh-nhac-viec',
    component: CauHinhNhacViecComponent,
  },
  {
    path: 'thong-ke-nhac-viec',
    component: ThongKeNhacViecComponent,
  },
  {
    path: 'duyet-nhac-viec',
    component: DuyetNhacViecComponent,
  },
  {
    path: 'xem-nhac-viec',
    component: XemNhacViecComponent,
  },
  
]
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhacViecRoutingModule { }
