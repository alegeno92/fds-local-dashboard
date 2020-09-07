import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    TableComponent,
    CardComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports:[
    LayoutComponent,
    TableComponent,
    CardComponent
  ]
})
export class UiModule {}
