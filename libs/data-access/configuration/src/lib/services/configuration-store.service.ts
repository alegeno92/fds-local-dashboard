import { Injectable } from '@angular/core';
import { EntityActionFactory, EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Configuration } from '../interfaces';
import { StoreInterface } from '@fds/core';

@Injectable()
export class ConfigurationStoreService implements StoreInterface<Configuration>{

  items$: Observable<Configuration[]>;
  loading$: Observable<boolean>;
  configurationEntityCollectionService: EntityCollectionService<Configuration>;

  constructor(private eaf: EntityActionFactory, private ecs: EntityCollectionServiceFactory) {
    this.configurationEntityCollectionService = this.ecs.create<Configuration>('Configuration');
  }

  getItems(): Observable<Configuration[]> {
    return this.items$;
  }

  getLoading(): Observable<boolean> {
    return this.loading$;
  }

  init() {
    this.items$ = this.configurationEntityCollectionService.getAll();
    this.loading$ = this.configurationEntityCollectionService.loading$;
  }
}
