import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ConfigurationRouterEffects } from './configuration-router.effects';

describe('SensorRouterEffects', () => {
  let actions$: Observable<any>;
  let effects: ConfigurationRouterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigurationRouterEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ConfigurationRouterEffects>(ConfigurationRouterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
