import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './page-list/page-list.component';
import { EffectsModule } from '@ngrx/effects';
import { SensorRouterEffects } from './sensor-router.effects';
import { RouterModule } from '@angular/router';

import { DataAccessSensorModule } from '@fds/data-access/sensor';
import { UiModule } from '../ui/ui.module';
import { ModalExportComponent } from './modal-export/modal-export.component';
import { FormModule } from '@fds/form';


@NgModule({
  declarations: [PageListComponent, ModalExportComponent],
  imports: [
    CommonModule,
    DataAccessSensorModule,
    EffectsModule.forFeature([SensorRouterEffects]),
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: PageListComponent
      }
    ]),
    UiModule,
    FormModule
  ],
  entryComponents:[ModalExportComponent]
})
export class SensorsModule { }
