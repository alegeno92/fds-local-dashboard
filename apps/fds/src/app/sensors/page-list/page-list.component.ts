import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sensor, SensorCollectionService } from '@fds/data-access/sensor';
import { Store } from '@ngrx/store';
import { EntityActionFactory } from '@ngrx/data';
import { untilViewDestroyed } from '../../ui/until-view-destroyed';

@Component({
  selector: 'fds-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  sensors$: Observable<Sensor[]>;
  loading$: Observable<boolean>;
  displayedColumns = ['id', 'module', 'sensor', 'type'];

  constructor(private store: Store<any>,
              private eaf: EntityActionFactory,
              private elRef: ElementRef,
              private entityActionFactory: EntityActionFactory,
              private sensorCollectionService: SensorCollectionService) {
  }

  ngOnInit(): void {
    this.sensors$ = this.sensorCollectionService.entities$
      .pipe(untilViewDestroyed(this.elRef));
    this.loading$ = this.sensorCollectionService.loading$
      .pipe(untilViewDestroyed(this.elRef));
  }

}
