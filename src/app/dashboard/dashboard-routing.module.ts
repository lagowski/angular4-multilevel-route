import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';

export const homeRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      pageTitle: 'Home'
    }
  }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
