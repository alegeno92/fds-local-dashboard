import { EntityMetadataMap } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
  Sensor: {
    entityName: 'Sensor',
    selectId: sensor => sensor.id
  }
};

export const pluralNames = {
  Sensor: 'Sensors'
};
