import { Routes, RouterModule } from '@angular/router';
import { PageAComponent } from './page-a/page-a.component';

export const page2Routes: Routes = [
  {
    path: 'page-b',
    loadChildren: './page-b/page-b.module#PageBModule'
  },
  {
    path: 'page-a',
    component: PageAComponent,
  }

];

export const page2Routing = RouterModule.forChild(page2Routes);
