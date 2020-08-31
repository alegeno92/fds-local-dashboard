import { SensorValuesEntity } from './sensor-values.models';
import * as SensorValuesActions from './sensor-values.actions';
import { initialState, reducer, State } from './sensor-values.reducer';

describe('SensorValues Reducer', () => {
  const createSensorValuesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SensorValuesEntity);

  beforeEach(() => {});

  describe('valid SensorValues actions', () => {
    it('loadSensorValuesSuccess should return set the list of known SensorValues', () => {
      const sensorValues = [
        createSensorValuesEntity('PRODUCT-AAA'),
        createSensorValuesEntity('PRODUCT-zzz'),
      ];
      const action = SensorValuesActions.loadSensorValuesSuccess({
        sensorValues,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
