import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportService } from './export.service';

@NgModule({
  imports: [CommonModule],
  providers:[
    ExportService
  ]
})
export class DataAccessExportModule {}
