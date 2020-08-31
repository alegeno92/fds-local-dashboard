import { TestBed } from '@angular/core/testing';
import { SensorValuesService } from './sensor-value.service';


describe('SensorDataService', () => {
  let service: SensorValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
