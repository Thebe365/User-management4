import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModRoutingModule } from './dashboard-mod-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';


@NgModule({
  declarations: [
    DashboardHomeComponent,
    DashboardComponent,
    UpdateModalComponent
  ],
  imports: [
    CommonModule,
    DashboardModRoutingModule
  ]
})
export class DashboardModModule { }
