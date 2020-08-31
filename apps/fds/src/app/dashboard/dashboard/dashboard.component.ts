import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  getSensorValuesEntities,
  getSensorValuesLoaded,
  SensorValuesPartialState,
  SensorValuesService
} from '@fds/data-access/sensor-value';
import { untilViewDestroyed } from '../../ui/until-view-destroyed';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fds-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['device', 'sensor', 'value', 'date'];

  sensorData$: Observable<any>;
  loaded$: Observable<boolean>;

  constructor(
    private store: Store<SensorValuesPartialState>,
    private elRef: ElementRef,
    private sensorValueService: SensorValuesService
  ) {
    this.sensorValueService.init();
  }

  ngOnInit() {
    this.sensorData$ = this.store.pipe(
      untilViewDestroyed(this.elRef),
      select(getSensorValuesEntities),
      map(sensors => Object.values(sensors))
    );

    this.loaded$ = this.store.pipe(
      untilViewDestroyed(this.elRef),
      select(getSensorValuesLoaded)
    )
  }

}
