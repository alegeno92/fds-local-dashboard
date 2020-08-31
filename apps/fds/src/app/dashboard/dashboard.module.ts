import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataAccessSensorValueModule } from '@fds/data-access/sensor-value';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([{
      path: '',
      component: DashboardComponent
    }]),
    DataAccessSensorValueModule
  ]
})
export class DashboardModule {
}
