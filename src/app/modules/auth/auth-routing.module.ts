import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      // {
      //   path: 'reset-password',
      //   component: ResetPasswordComponent,
      // },
    ],
  },

  {path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth', redirectTo: 'auth/login', pathMatch: 'full' },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
