import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSensorValues from './+state/sensor-values.reducer';
import { SensorValuesEffects } from './+state/sensor-values.effects';
import { SensorValuesService } from './sensor-values.service';
import { MqttModule } from 'ngx-mqtt';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromSensorValues.SENSOR_VALUES_FEATURE_KEY,
      fromSensorValues.reducer
    ),
    EffectsModule.forFeature([SensorValuesEffects]),
  ],
  providers:[
    SensorValuesService
  ]
})
export class DataAccessSensorValueModule {}
