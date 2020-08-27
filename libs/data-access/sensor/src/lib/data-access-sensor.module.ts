import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorStoreService } from './services/sensor-store.service';
import { SensorDataService } from './services/sensor-data.service';
import { SensorCollectionService } from './services/sensor-collection.service';
import { EntityDataService, EntityDefinitionService, PLURAL_NAMES_TOKEN } from '@ngrx/data';
import { entityMetadata, pluralNames } from './data.configuration';

@NgModule({
  imports: [CommonModule],
  providers: [
    SensorStoreService,
    SensorDataService,
    SensorCollectionService,
    {
      provide: PLURAL_NAMES_TOKEN,
      useValue: pluralNames,
      multi: true
    }
  ]
})
export class DataAccessSensorModule {
  constructor(eds: EntityDefinitionService,  edas: EntityDataService, sensorDataService: SensorDataService) {
    eds.registerMetadataMap(entityMetadata);
    edas.registerService('Sensor', sensorDataService);
  }
}
