import { EntitySelectorsFactory } from '@ngrx/data';
import { createSelector } from '@ngrx/store';
import { Sensor } from '../interfaces';
import { selectRouteParam } from '@fds/core';

const sensorSelectors = new EntitySelectorsFactory().create<Sensor>('Sensor');


export const selectSelectedMachineId =  selectRouteParam('id');


export const selectMachine = createSelector(
  sensorSelectors.selectEntityMap,
  selectSelectedMachineId,
  (sensors, selectedId) => sensors[selectedId]
);

