import { TestBed } from '@angular/core/testing';

import { SensorStoreService } from './sensor-store.service';

describe('SensorService', () => {
  let service: SensorStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
