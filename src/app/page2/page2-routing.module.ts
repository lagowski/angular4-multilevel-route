import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './page2.component';
import { ModuleWithProviders } from '@angular/core';

export const page2Routes: Routes = [
  {
    path: '',
    component: Page2Component,
    data: {
      pageTitle: 'Page 2'
    }
  }
];

export const page2Routing: ModuleWithProviders = RouterModule.forChild(page2Routes);
