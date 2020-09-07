import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EntityDataService, EntityDefinitionService, PLURAL_NAMES_TOKEN } from '@ngrx/data';
import { entityMetadata, pluralNames } from './data.configuration';
import { ConfigurationStoreService } from './services/configuration-store.service';
import { ConfigurationDataService } from './services/configuration-data.service';
import { ConfigurationCollectionService } from './services/configuration-collection.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ConfigurationStoreService,
    ConfigurationDataService,
    ConfigurationCollectionService,
    {
      provide: PLURAL_NAMES_TOKEN,
      useValue: pluralNames,
      multi: true
    }
  ]
})
export class DataAccessConfigurationModule {
  constructor(eds: EntityDefinitionService,  edas: EntityDataService, configurationDataService: ConfigurationDataService) {
    eds.registerMetadataMap(entityMetadata);
    edas.registerService('Configuration', configurationDataService);
  }
}
