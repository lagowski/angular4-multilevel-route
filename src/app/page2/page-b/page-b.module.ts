import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

import { HeadComponent} from './page-b-head.component';
import { PageBRoutingModule } from './page-b-routing.module';
import { PageBComponent } from './page-b.component';

@NgModule({
  imports: [
    CommonModule,
    PageBRoutingModule
  ],
  declarations: [
    DetailsComponent,
    ListComponent,
    HeadComponent,
    PageBComponent
  ]
})
export class PageBModule { }
