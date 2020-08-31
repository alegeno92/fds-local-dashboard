import { TestBed } from '@angular/core/testing';

import { ActuatorDataService } from './actuator-data.service';

describe('SensorDataService', () => {
  let service: ActuatorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActuatorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
