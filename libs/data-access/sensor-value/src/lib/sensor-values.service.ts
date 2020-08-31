import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SensorValuesPartialState } from './+state/sensor-values.reducer';
import { Store } from '@ngrx/store';
import { addSensorValueEntity } from './+state/sensor-values.actions';
import { SensorValue } from './sensor-value';
import { map } from 'rxjs/operators';
import { SensorValuesEntity } from './+state/sensor-values.models';

@Injectable()
export class SensorValuesService{

  sensorData$ = this.socket.fromEvent<SensorValue>('sensors')

  constructor(private socket: Socket, private store: Store<SensorValuesPartialState>) {
    this.socket.connect()
  }

  init() {

    this.sensorData$
      .pipe(
        map((value) => <SensorValuesEntity>{
          id: `${value.device}_${value.sensor}`,
          sensor: value.sensor,
          device: value.device,
          date: new Date(value.timestamp * 1000),
          value_type: value.value_type,
          value: value.value
        })
      )
      .subscribe(v => this.store.dispatch(addSensorValueEntity({sensorValueEntity: v})));
  }
}
