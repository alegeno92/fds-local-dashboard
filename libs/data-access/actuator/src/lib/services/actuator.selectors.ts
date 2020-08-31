import { EntitySelectorsFactory } from '@ngrx/data';
import { createSelector } from '@ngrx/store';
import { Actuator } from '../interfaces';
import { selectRouteParam } from '@fds/core';

const actuatorSelectors = new EntitySelectorsFactory().create<Actuator>('Actuator');


export const selectSelectedMachineId =  selectRouteParam('id');


export const selectMachine = createSelector(
  actuatorSelectors.selectEntityMap,
  selectSelectedMachineId,
  (actuators, selectedId) => actuators[selectedId]
);

