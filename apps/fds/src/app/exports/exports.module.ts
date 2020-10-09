import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './page-list/page-list.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { FormModule } from '@fds/form';
import { DataAccessExportModule } from '@fds/data-access/export';

@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
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
    FormModule,
    DataAccessExportModule
  ]
})
export class ExportsModule { }
