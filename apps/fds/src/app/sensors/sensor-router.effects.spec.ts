import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SensorRouterEffects } from './sensor-router.effects';

describe('SensorRouterEffects', () => {
  let actions$: Observable<any>;
  let effects: SensorRouterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SensorRouterEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<SensorRouterEffects>(SensorRouterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
