import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { KeHoachVonComponent } from './ke-hoach-von/ke-hoach-von.component';
import { DonViSuDungComponent } from './don-vi-su-dung/don-vi-su-dung.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NhomNguoiDungComponent } from './nhom-nguoi-dung/nhom-nguoi-dung.component';
import { QuanLyPhanQuyenComponent } from './quan-ly-phan-quyen/quan-ly-phan-quyen.component';
import { QuanLyDoiTuongComponent } from './quan-ly-doi-tuong/quan-ly-doi-tuong.component';
import { QuanLyThongBaoComponent } from './quan-ly-thong-bao/quan-ly-thong-bao.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { GanNguoiDungDvhcComponent } from './gan-nguoi-dung-dvhc/gan-nguoi-dung-dvhc.component';
import { ConfigsComponent } from './configs/configs.component';
import { LogsComponent } from './logs/logs.component';
import { BaoCaoTongHopComponent } from './bao-cao-tong-hop/bao-cao-tong-hop.component';

const routes: Routes = [
 
  { path: '', component: PagesComponent, children:
[ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'ke-hoach-von',
    component: KeHoachVonComponent,
  },
  {
    path: 'don-vi-su-dung',
    component: DonViSuDungComponent,
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent,
  },
  {
    path: 'nhom-nguoi-dung',
    component: NhomNguoiDungComponent,
  },
  {
    path: 'quan-ly-phan-quyen',
    component: QuanLyPhanQuyenComponent,
  },
  {
    path: 'quan-ly-doi-tuong',
    component: QuanLyDoiTuongComponent,
  },
  {
    path: 'quan-ly-thong-bao',
    component: QuanLyThongBaoComponent,
  },
  {
    path: 'userinfo',
    component: UserinfoComponent,
  },
  {
    path: 'gan-nguoi-dung-dvhc',
    component: GanNguoiDungDvhcComponent,
  },
  {
    path: 'logs',
    component: LogsComponent,
  },
  {
    path: 'configs',
    component: ConfigsComponent,
  },
  {
    path: 'bao-cao-tong-hop',
    component: BaoCaoTongHopComponent,
  },
  { path: 'danh-muc', loadChildren: () => import('./danh-muc/danh-muc.module').then(m => m.DanhMucModule) },
  { path: 'nhac-viec', loadChildren: () => import('./nhac-viec/nhac-viec.module').then(m => m.NhacViecModule) }, 
  { path: 'bao-cao-hinh-anh', loadChildren: () => import('./bao-cao-hinh-anh/bao-cao-hinh-anh.module').then(m => m.BaoCaoHinhAnhModule) },
] },
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
