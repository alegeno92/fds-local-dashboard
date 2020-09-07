import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SensorValuesPartialState } from './+state/sensor-values.reducer';
import { Store } from '@ngrx/store';
import { addSensorValueEntity } from './+state/sensor-values.actions';
import { SensorValue } from './sensor-value';
import { map, tap } from 'rxjs/operators';
import { SensorValuesEntity } from './+state/sensor-values.models';

@Injectable()
export class SensorValuesService extends Socket{

  sensorData$ = this.fromEvent<SensorValue>('sensors')

  constructor(private store: Store<SensorValuesPartialState>) {
    super({url:':6006'});
  }

  init() {

    this.sensorData$
      .pipe(
        tap(x => console.log(x)),
        map((value) => <SensorValuesEntity>{
          id: `${value.module}_${value.sensor}`,
          sensor: value.sensor,
          module: value.module,
          date: new Date(value.timestamp * 1000),
          type: value.type,
          value: value.value
        })
      )
      .subscribe(v => this.store.dispatch(addSensorValueEntity({sensorValueEntity: v})));
  }
}
