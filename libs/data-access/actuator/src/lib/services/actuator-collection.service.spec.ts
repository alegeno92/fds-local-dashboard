import { TestBed } from '@angular/core/testing';
import { SensorCollectionService } from '@fds/data-access/sensor';


describe('SensorCollectionService', () => {
  let service: SensorCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
