import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaoCaoHinhAnhComponent } from './bao-cao-hinh-anh.component';
import { DuyetBaoCaoComponent } from './duyet-bao-cao/duyet-bao-cao.component';
import { TraCuuPAKNComponent } from './tra-cuu-pakn/tra-cuu-pakn.component';
import { LapBaoCaoComponent } from './lap-bao-cao/lap-bao-cao.component';
import { QuanLyBaoCaoComponent } from './quan-ly-bao-cao/quan-ly-bao-cao.component';

const routes: Routes = [
 
  { path: '', component: BaoCaoHinhAnhComponent, children:
[
  {
    path: 'lap-bao-cao',
    component: LapBaoCaoComponent,
  },
  {
    path: 'duyet-bao-cao',
    component: DuyetBaoCaoComponent,
  },
  {
    path: 'tra-cuu-bao-cao',
    component: TraCuuPAKNComponent,
  },
  {
    path: 'quan-ly-bao-cao',
    component: QuanLyBaoCaoComponent,
  },
 
] },
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoHinhAnhRoutingModule { }
