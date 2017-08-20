import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule} from '../shared/shared.module';
import { dashboardRouting } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    dashboardRouting
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
