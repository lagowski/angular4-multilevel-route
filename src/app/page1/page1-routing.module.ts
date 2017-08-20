import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1.component';
import { ModuleWithProviders } from '@angular/core';

export const page1Routes: Routes = [
  {
    path: '',
    component: Page1Component,
    data: {
      pageTitle: 'Page 1'
    }
  }
];

export const page1Routing: ModuleWithProviders = RouterModule.forChild(page1Routes);
