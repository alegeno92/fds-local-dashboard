import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator, Logger } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Update } from '@ngrx/entity';
import { Sensor } from '../interfaces';

@Injectable()
export class SensorDataService extends DefaultDataService<Sensor> {


  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger, defaultDataServiceConfig: DefaultDataServiceConfig) {
    super('Sensor', http, httpUrlGenerator, defaultDataServiceConfig);
    logger.log('Created custom Sensor Entity Data Service');
  }

  getAll(): Observable<Sensor[]> {
    return super.getAll().pipe(
      map(response => response['value'])
    );
  }

  getById(id): Observable<Sensor> {
    return super.getAll().pipe(
      map(response => {
        return response['value'].find(m => m.id === id);
      })
    );
  }

  add(entity: Sensor): Observable<Sensor> {
    return super.add(entity).pipe(
      map(response => response['value'])
    );
  }

  update(update: Update<Sensor>): Observable<Sensor> {
    return super.update(update).pipe(
      map(response => response['value'])
    );
  }
}
