import { Injectable } from '@angular/core';
import { EntityActionOptions, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Sensor } from '../interfaces';

@Injectable()
export class SensorCollectionService extends EntityCollectionServiceBase<Sensor>{

  constructor(elementsFactory: EntityCollectionServiceElementsFactory) {
    super('Sensor', elementsFactory);
  }
  getAll(options?: EntityActionOptions): Observable<Sensor[]> {
    return super.getAll(options);
  }


}
