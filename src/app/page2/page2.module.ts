import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';
import { page2Routing } from './page2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    page2Routing
  ],
  declarations: [Page2Component]
})
export class Page2Module { }
