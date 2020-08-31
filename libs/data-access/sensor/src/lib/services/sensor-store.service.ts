import { Injectable } from '@angular/core';
import { EntityActionFactory, EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Sensor } from '../interfaces';
import { StoreInterface } from '@fds/core';

@Injectable()
export class SensorStoreService implements StoreInterface<Sensor>{

  items$: Observable<Sensor[]>;
  loading$: Observable<boolean>;
  sensorEntityCollectionService: EntityCollectionService<Sensor>;

  constructor(private eaf: EntityActionFactory, private ecs: EntityCollectionServiceFactory) {
    this.sensorEntityCollectionService = this.ecs.create<Sensor>('Sensor');
  }

  getItems(): Observable<Sensor[]> {
    return this.items$;
  }

  getLoading(): Observable<boolean> {
    return this.loading$;
  }

  init() {
    this.items$ = this.sensorEntityCollectionService.getAll();
    this.loading$ = this.sensorEntityCollectionService.loading$;
  }
}
