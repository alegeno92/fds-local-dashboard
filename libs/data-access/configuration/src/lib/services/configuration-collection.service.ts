import { Injectable } from '@angular/core';
import { EntityActionOptions, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Configuration } from '../interfaces';

@Injectable()
export class ConfigurationCollectionService extends EntityCollectionServiceBase<Configuration>{

  constructor(elementsFactory: EntityCollectionServiceElementsFactory) {
    super('Configuration', elementsFactory);
  }
  getAll(options?: EntityActionOptions): Observable<Configuration[]> {
    return super.getAll(options);
  }

  update(entity: Partial<Configuration>, options?: EntityActionOptions): Observable<Configuration> {
    return super.update(entity, options);
  }
}
