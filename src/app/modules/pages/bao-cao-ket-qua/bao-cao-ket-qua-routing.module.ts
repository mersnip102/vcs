import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaoCaoKetQuaComponent } from './bao-cao-ket-qua.component';
import { BaoCaoKetQuaChildComponent } from './bao-cao-ket-qua-child/bao-cao-ket-qua-child.component';
import { BaoCaoKetQuaDetailsComponent } from './bao-cao-ket-qua-details/bao-cao-ket-qua-details.component';

const routes: Routes = [{ path: '', component: BaoCaoKetQuaComponent,
children:[
  {path:'child/:id', component: BaoCaoKetQuaChildComponent},
  {path:'details/:id', component: BaoCaoKetQuaDetailsComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoKetQuaRoutingModule { }
