import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataModule } from '../data/data.module';
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DataModule,
    UiModule,
    RouterModule.forChild([{
      path: '',
      component: DashboardComponent
    }]),
    CommonModule
  ]
})
export class DashboardModule {
}
