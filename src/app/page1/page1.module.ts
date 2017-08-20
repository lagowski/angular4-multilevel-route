import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import { page1Routing } from './page1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    page1Routing
  ],
  declarations: [Page1Component]
})
export class Page1Module { }
