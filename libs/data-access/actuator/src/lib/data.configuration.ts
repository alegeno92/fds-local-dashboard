import { EntityMetadataMap } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
  Actuator: {
    entityName: 'Actuator',
    selectId: actuator => {
      console.log(actuator)
      return actuator.id
    }
  }
};

export const pluralNames = {
  Actuator: 'Actuators'
};
