import { EntitySelectorsFactory } from '@ngrx/data';
import { createSelector } from '@ngrx/store';
import { Configuration } from '../interfaces';
import { selectRouteParam } from '@fds/core';

const actuatorSelectors = new EntitySelectorsFactory().create<Configuration>('Configuration');


export const selectSelectedConfigurationId =  selectRouteParam('id');


export const selectMachine = createSelector(
  actuatorSelectors.selectEntityMap,
  selectSelectedConfigurationId,
  (configurations, selectedId) => configurations[selectedId]
);

