import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ActuatorRouterEffects } from './actuator-router.effects';

describe('SensorRouterEffects', () => {
  let actions$: Observable<any>;
  let effects: ActuatorRouterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ActuatorRouterEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ActuatorRouterEffects>(ActuatorRouterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
