import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator, Logger } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';
import { Actuator } from '../interfaces';

@Injectable()
export class ActuatorDataService extends DefaultDataService<Actuator> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger, defaultDataServiceConfig: DefaultDataServiceConfig) {
    super('Actuator', http, httpUrlGenerator, defaultDataServiceConfig);
    logger.log('Created custom Actuator Entity Data Service');
  }

  getAll(): Observable<Actuator[]> {
    return super.getAll();
  }

  getById(id): Observable<Actuator> {
    return super.getById(id);
  }

  add(entity: Actuator): Observable<Actuator> {
    return super.add(entity);
  }

  update(update: Update<Actuator>): Observable<Actuator> {
    return super.update(update);
  }
}
