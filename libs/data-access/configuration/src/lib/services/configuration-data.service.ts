import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator, Logger } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';
import { Configuration } from '../interfaces';

@Injectable()
export class ConfigurationDataService extends DefaultDataService<Configuration> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger, defaultDataServiceConfig: DefaultDataServiceConfig) {
    super('Configuration', http, httpUrlGenerator, defaultDataServiceConfig);
    logger.log('Created custom Configuration Entity Data Service');
  }

  getAll(): Observable<Configuration[]> {
    return super.getAll();
  }

  getById(id): Observable<Configuration> {
    return super.getById(id);
  }

  add(entity: Configuration): Observable<Configuration> {
    return super.add(entity);
  }

  update(update: Update<Configuration>): Observable<Configuration> {
    return super.update(update);
  }
}
