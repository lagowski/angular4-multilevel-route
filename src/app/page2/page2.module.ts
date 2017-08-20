import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { page2Routing } from './page2-routing.module';

import { PageAComponent } from './page-a/page-a.component';


@NgModule({
  imports: [
    CommonModule,
    page2Routing
  ],
  declarations: [PageAComponent]
})
export class Page2Module { }
