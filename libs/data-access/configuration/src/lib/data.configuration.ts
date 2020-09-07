import { EntityMetadataMap } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
  Configuration: {
    entityName: 'Configuration',
    selectId: configuration => {
      return configuration.id
    }
  }
};

export const pluralNames = {
  Configuration: 'Configurations'
};
