import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DanhMucComponent } from './danh-muc.component';
import { ChucDanhComponent } from './chuc-danh/chuc-danh.component';
import { SuKienComponent } from './su-kien/su-kien.component';
import { NhiemVuComponent } from './nhiem-vu/nhiem-vu.component';
import { LoaiDoiTuongComponent } from './loai-doi-tuong/loai-doi-tuong.component';

const routes: Routes = [{ path: '', component: DanhMucComponent, children: [
  {
    path: 'chuc-danh',
    component: ChucDanhComponent,
  },
  {
    path: 'su-kien',
    component: SuKienComponent,
  },
  {
    path: 'nhiem-vu',
    component: NhiemVuComponent,
  },
  {
    path: 'loai-doi-tuong',
    component: LoaiDoiTuongComponent,
  },
  
]
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhMucRoutingModule { }
