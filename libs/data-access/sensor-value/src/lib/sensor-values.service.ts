import { Injectable } from '@angular/core';
import { SensorValuesPartialState } from './+state/sensor-values.reducer';
import { Store } from '@ngrx/store';
import { addSensorValueEntity } from './+state/sensor-values.actions';
import { map, tap } from 'rxjs/operators';
import { SensorValuesEntity } from './+state/sensor-values.models';
import { MqttService } from 'ngx-mqtt';
import { Observable } from 'rxjs';


@Injectable()
export class SensorValuesService {

  sensorData$: Observable<any>;

  constructor(
    private mqttService: MqttService,
    private store: Store<SensorValuesPartialState>) {
    this.sensorData$ = this.mqttService.observe('/sensors/#')
      .pipe(
        map((value) => JSON.parse(value.payload.toString())),
      );
  }

  init() {

    this.sensorData$
      .pipe(
        map((value) => <SensorValuesEntity>{
          id: `${value.module}_${value.sensor}`,
          sensor: value.sensor,
          module: value.module,
          date: new Date(value.timestamp * 1000),
          type: value.type,
          value: value.value
        })
      )
      .subscribe(v => this.store.dispatch(addSensorValueEntity({ sensorValueEntity: v })));
  }
}
