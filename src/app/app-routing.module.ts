import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PrivateLayoutComponent} from './shared/layout/app-layout/private-layout.component';
import { PublicLayoutComponent} from './shared/layout/app-layout/public-layout.component';

const routes: Routes = [
  { path: '', component: PrivateLayoutComponent },
  { path: 'login', component: PublicLayoutComponent }

  // {
  //   path: '',
  //   component: PrivateLayoutComponent,
  //   children: [
  //     {
  //       path: '', redirectTo: 'home', pathMatch: 'full',
  //     },
  //     {
  //       path: 'home',
  //       loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
  //       data: {
  //         pageTitle: 'Home'
  //       },
  //     },
  //   ]
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
