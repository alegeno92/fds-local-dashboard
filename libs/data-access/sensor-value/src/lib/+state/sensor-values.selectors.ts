import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SENSOR_VALUES_FEATURE_KEY, SensorValuesPartialState, State } from './sensor-values.reducer';

// Lookup the 'SensorValues' feature state managed by NgRx
export const getSensorValuesState = createFeatureSelector<
  SensorValuesPartialState,
  State
>(SENSOR_VALUES_FEATURE_KEY);

export const getSensorValuesLoaded = createSelector(
  getSensorValuesState,
  (state: State) => state.loaded
);

export const getSensorValuesError = createSelector(
  getSensorValuesState,
  (state: State) => state.error
);

export const getSensorValuesEntities = createSelector(
  getSensorValuesState,
  (state: State) => state.sensors
);
