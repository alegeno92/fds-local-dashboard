import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SensorActionService {

  constructor(private http: HttpClient) {
  }

  export(clearTable: boolean) {
    return this.http.post('/api/sensors/export', { clear: clearTable }, { responseType: 'blob', observe: 'response' });
  }
}
