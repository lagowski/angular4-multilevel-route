import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PrivateLayoutComponent} from './shared/layout/app-layout/private-layout.component';
import { PublicLayoutComponent} from './shared/layout/app-layout/public-layout.component';

const routes: Routes = [

  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
        data: {
          pageTitle: 'Home'
        },
      },
      {
        path: 'page1',
        loadChildren: 'app/page1/page1.module#Page1Module',
        data: {
          pageTitle: 'Page 2'
        },
      },
      {
        path: 'page2',
        loadChildren: 'app/page2/page2.module#Page2Module',
        data: {
          pageTitle: 'Page 2'
        },
      }
    ]
  },
  { path: 'login', component: PublicLayoutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});

