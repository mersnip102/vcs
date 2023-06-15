import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { KeHoachVonComponent } from './ke-hoach-von/ke-hoach-von.component';
import { DonViSuDungComponent } from './don-vi-su-dung/don-vi-su-dung.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NhomNguoiDungComponent } from './nhom-nguoi-dung/nhom-nguoi-dung.component';
import { QuanLyPhanQuyenComponent } from './quan-ly-phan-quyen/quan-ly-phan-quyen.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '', component: PagesComponent, children:
[
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
  { path: 'danh-muc', loadChildren: () => import('./danh-muc/danh-muc.module').then(m => m.DanhMucModule) },
] }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
