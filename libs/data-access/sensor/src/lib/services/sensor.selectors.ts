import { EntitySelectorsFactory } from '@ngrx/data';
import { createSelector } from '@ngrx/store';
import { Sensor } from '../interfaces/sensor.interface';

const sensorSelectors = new EntitySelectorsFactory().create<Sensor>('Sensor');
