import { Injectable } from '@angular/core';
import { EntityActionOptions, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Actuator } from '../interfaces';

@Injectable()
export class ActuatorCollectionService extends EntityCollectionServiceBase<Actuator>{

  constructor(elementsFactory: EntityCollectionServiceElementsFactory) {
    super('Actuator', elementsFactory);
  }
  getAll(options?: EntityActionOptions): Observable<Actuator[]> {
    return super.getAll(options);
  }

  update(entity: Partial<Actuator>, options?: EntityActionOptions): Observable<Actuator> {
    return super.update(entity, options);
  }
}
