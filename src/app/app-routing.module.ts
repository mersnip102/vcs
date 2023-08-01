import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { authGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' },
  { path: '', component: AppComponent, children:[
    { path: 'pages', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule), canActivate: [authGuard] },
    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  ] },
  { path: '**', component: PageNotFoundComponent },

  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [authGuard] },

  { path: 'component', loadChildren: () => import('./shared/component/component.module').then(m => m.ComponentModule), canActivate: [authGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
