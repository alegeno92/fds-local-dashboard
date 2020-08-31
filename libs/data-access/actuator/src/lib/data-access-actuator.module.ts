import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EntityDataService, EntityDefinitionService, PLURAL_NAMES_TOKEN } from '@ngrx/data';
import { ActuatorStoreService } from './services/actuator-store.service';
import { ActuatorDataService } from './services/actuator-data.service';
import { ActuatorCollectionService } from './services/actuator-collection.service';
import { entityMetadata, pluralNames } from './data.configuration';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ActuatorStoreService,
    ActuatorDataService,
    ActuatorCollectionService,
    {
      provide: PLURAL_NAMES_TOKEN,
      useValue: pluralNames,
      multi: true
    }
  ]
})
export class DataAccessActuatorModule {
  constructor(eds: EntityDefinitionService,  edas: EntityDataService, sensorDataService: ActuatorDataService) {
    eds.registerMetadataMap(entityMetadata);
    edas.registerService('Actuator', sensorDataService);
  }
}
