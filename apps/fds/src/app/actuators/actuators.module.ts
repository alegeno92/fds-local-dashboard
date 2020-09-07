import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './page-list/page-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ActuatorRouterEffects } from './actuator-router.effects';
import { RouterModule } from '@angular/router';

import { UiModule } from '../ui/ui.module';
import { DataAccessActuatorModule } from '@fds/data-access/actuator';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { FormModule } from '@fds/form';
import { ModelCreateComponent } from './model-create/model-create.component';


@NgModule({
  declarations: [PageListComponent, ModalEditComponent, ModelCreateComponent],
  imports: [
    CommonModule,
    DataAccessActuatorModule,
    EffectsModule.forFeature([ActuatorRouterEffects]),
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
  entryComponents:[ModalEditComponent]
})
export class ActuatorsModule { }
