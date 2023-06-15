import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '', component: AppComponent, children:[
    { path: 'pages', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule) },
    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  ] },

  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },

  { path: 'component', loadChildren: () => import('./shared/component/component.module').then(m => m.ComponentModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
