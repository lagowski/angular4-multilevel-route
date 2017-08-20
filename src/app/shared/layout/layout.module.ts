import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrivateLayoutComponent} from './app-layout/private-layout.component';
import { PublicLayoutComponent} from './app-layout/public-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PrivateLayoutComponent,
    PublicLayoutComponent
  ],
  exports: [
    PrivateLayoutComponent,
    PublicLayoutComponent
  ]
})
export class LayoutModule { }
