import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sensor, SensorActionService, SensorCollectionService } from '@fds/data-access/sensor';
import { Store } from '@ngrx/store';
import { EntityActionFactory } from '@ngrx/data';
import { untilViewDestroyed } from '../../ui/until-view-destroyed';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalExportComponent } from '../modal-export/modal-export.component';

@Component({
  selector: 'fds-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  sensors$: Observable<Sensor[]>;
  loading$: Observable<boolean>;
  displayedColumns = ['id', 'device', 'name', 'type'];

  constructor(private store: Store<any>,
              private eaf: EntityActionFactory,
              private elRef: ElementRef,
              private entityActionFactory: EntityActionFactory,
              private sensorCollectionService: SensorCollectionService,
              private sensorActionService: SensorActionService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.sensors$ = this.sensorCollectionService.entities$
      .pipe(untilViewDestroyed(this.elRef));
    this.loading$ = this.sensorCollectionService.loading$
      .pipe(untilViewDestroyed(this.elRef));
  }

  open() {
    const modalRef = this.modalService.open(ModalExportComponent);
    modalRef.result.then(value => this.sensorActionService.export(value), reason => console.log(reason));
  }
}
