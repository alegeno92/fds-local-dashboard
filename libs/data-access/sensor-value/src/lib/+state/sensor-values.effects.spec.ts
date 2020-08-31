import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { SensorValuesEffects } from './sensor-values.effects';
import * as SensorValuesActions from './sensor-values.actions';

describe('SensorValuesEffects', () => {
  let actions: Observable<any>;
  let effects: SensorValuesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SensorValuesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(SensorValuesEffects);
  });

  describe('loadSensorValues$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SensorValuesActions.loadSensorValues() });

      const expected = hot('-a-|', {
        a: SensorValuesActions.loadSensorValuesSuccess({ sensorValues: [] }),
      });

      expect(effects.loadSensorValues$).toBeObservable(expected);
    });
  });
});
