import { createAction, props } from '@ngrx/store';
import { SensorValuesEntity } from './sensor-values.models';

export const addSensorValueEntity = createAction(
  '[SensorValues] Add SensorValue',
  props<{ sensorValueEntity: SensorValuesEntity}>()
);
