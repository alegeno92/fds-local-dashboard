import { TestBed } from '@angular/core/testing';
import { ConfigurationCollectionService } from './configuration-collection.service';


describe('ConfigurationCollectionService', () => {
  let service: ConfigurationCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
