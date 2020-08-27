import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sensor } from '../../../../../../libs/data-access/sensor/src/lib/interfaces/sensor.interface';
import { Store } from '@ngrx/store';
import { EntityActionFactory } from '@ngrx/data';
import { SensorCollectionService } from '../../../../../../libs/data-access/sensor/src/lib/services/sensor-collection.service';
import { Router } from '@angular/router';
import { untilViewDestroyed } from '../../ui/until-view-destroyed';

@Component({
  selector: 'fds-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  sensors$: Observable<Sensor[]>;
  displayedColumns = ['#', 'Key', 'Sensor', 'Value', 'Date'];

  constructor(private store: Store<any>,
              private eaf: EntityActionFactory,
              private elRef: ElementRef,
              private sensorCollectionService: SensorCollectionService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.sensors$ = this.sensorCollectionService.entities$
      .pipe(untilViewDestroyed(this.elRef));
  }
}
