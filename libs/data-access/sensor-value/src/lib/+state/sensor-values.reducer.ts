import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import * as SensorValuesActions from './sensor-values.actions';
import { SensorValuesEntity } from './sensor-values.models';

export const SENSOR_VALUES_FEATURE_KEY = 'sensorValues';

export interface State {
  loaded: boolean; // has the SensorValues list been loaded
  error?: string | null; // last known error (if any)
  sensors: {
    [key: string]: SensorValuesEntity
  }
}

export interface SensorValuesPartialState {
  readonly [SENSOR_VALUES_FEATURE_KEY]: State;
}

export const sensorValuesAdapter: EntityAdapter<SensorValuesEntity> = createEntityAdapter<SensorValuesEntity>();

export const initialState: State = {
  // set initial required properties
  loaded: false,
  sensors: {}
};

const sensorValuesReducer = createReducer(
  initialState,
  on(SensorValuesActions.addSensorValueEntity, (state, { sensorValueEntity }) => {
      return {
        ...state,
        sensors: {
          ...state.sensors,
          [sensorValueEntity.id]: sensorValueEntity
        },
        loaded: true
      };
    }
  )
);

export function reducer(state: State | undefined, action: Action) {
  return sensorValuesReducer(state, action);
}
