import { SensorValuesEntity } from './sensor-values.models';
import { initialState, sensorValuesAdapter } from './sensor-values.reducer';
import * as SensorValuesSelectors from './sensor-values.selectors';

describe('SensorValues Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSensorValuesId = (it) => it['id'];
  const createSensorValuesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SensorValuesEntity);

  let state;

  beforeEach(() => {
    state = {
      sensorValues: sensorValuesAdapter.addAll(
        [
          createSensorValuesEntity('PRODUCT-AAA'),
          createSensorValuesEntity('PRODUCT-BBB'),
          createSensorValuesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('SensorValues Selectors', () => {
    it('getAllSensorValues() should return the list of SensorValues', () => {
      const results = SensorValuesSelectors.getAllSensorValues(state);
      const selId = getSensorValuesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SensorValuesSelectors.getSelected(state);
      const selId = getSensorValuesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getSensorValuesLoaded() should return the current 'loaded' status", () => {
      const result = SensorValuesSelectors.getSensorValuesLoaded(state);

      expect(result).toBe(true);
    });

    it("getSensorValuesError() should return the current 'error' state", () => {
      const result = SensorValuesSelectors.getSensorValuesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
