import { TestBed } from '@angular/core/testing';

import { ActuatorStoreService } from './sensor-store.service';

describe('SensorService', () => {
  let service: ActuatorStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActuatorStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
