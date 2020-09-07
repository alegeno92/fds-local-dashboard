import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './page-list/page-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ConfigurationRouterEffects } from './configuration-router.effects';
import { RouterModule } from '@angular/router';

import { UiModule } from '../ui/ui.module';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { FormModule } from '@fds/form';
import { ModelCreateComponent } from './model-create/model-create.component';
import { DataAccessConfigurationModule } from '@fds/data-access/configuration';


@NgModule({
  declarations: [PageListComponent, ModalEditComponent, ModelCreateComponent],
  imports: [
    CommonModule,
    DataAccessConfigurationModule,
    EffectsModule.forFeature([ConfigurationRouterEffects]),
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
export class ConfigurationsModule { }
