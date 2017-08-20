import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PageBComponent } from './page-b.component';
import { HeadComponent } from './page-b-head.component';

const routes: Routes = [
  {
    path: '',
    component: HeadComponent,
    children: [
      {
        path: '',
        component: PageBComponent,
      },
      {
        path: 'edit/:id',
        component: DetailsComponent,
        data: {
          pageTitle: 'Edit Action Details'
        }
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PageBRoutingModule { }
