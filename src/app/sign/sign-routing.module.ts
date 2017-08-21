import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const signRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'page-a'
  // },
  // {
  //   path: 'login',
  //   loadChildren: './page-b/page-b.module#PageBModule'
  // },
  {
    path: 'login',
    component: LoginComponent,
  }

];

export const signRouting = RouterModule.forChild(signRoutes);
