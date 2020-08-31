import { Injectable } from '@angular/core';
import { EntityActionFactory, EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Actuator } from '../interfaces';
import { StoreInterface } from '@fds/core';

@Injectable()
export class ActuatorStoreService implements StoreInterface<Actuator>{

  items$: Observable<Actuator[]>;
  loading$: Observable<boolean>;
  actuatorEntityCollectionService: EntityCollectionService<Actuator>;

  constructor(private eaf: EntityActionFactory, private ecs: EntityCollectionServiceFactory) {
    this.actuatorEntityCollectionService = this.ecs.create<Actuator>('Actuator');
  }

  getItems(): Observable<Actuator[]> {
    return this.items$;
  }

  getLoading(): Observable<boolean> {
    return this.loading$;
  }

  init() {
    this.items$ = this.actuatorEntityCollectionService.getAll();
    this.loading$ = this.actuatorEntityCollectionService.loading$;
  }
}
