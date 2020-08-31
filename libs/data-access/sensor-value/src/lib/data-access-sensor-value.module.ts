import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSensorValues from './+state/sensor-values.reducer';
import { SensorValuesEffects } from './+state/sensor-values.effects';
import { SocketIoModule } from 'ngx-socket-io';
import { SensorValuesService } from './sensor-values.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromSensorValues.SENSOR_VALUES_FEATURE_KEY,
      fromSensorValues.reducer
    ),
    EffectsModule.forFeature([SensorValuesEffects]),
    SocketIoModule.forRoot({
      url: 'http://localhost:6006'
    }),
  ],
  providers:[
    SensorValuesService
  ]
})
export class DataAccessSensorValueModule {}
