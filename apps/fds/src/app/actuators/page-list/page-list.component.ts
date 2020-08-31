import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EntityActionFactory, EntityOp } from '@ngrx/data';
import { untilViewDestroyed } from '../../ui/until-view-destroyed';
import { Actuator, ActuatorCollectionService } from '@fds/data-access/actuator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'fds-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  actuators$: Observable<Actuator[]>;
  loading$: Observable<boolean>;
  displayedColumns = ['id', 'device', 'name', 'type', 'value'];

  constructor(private store: Store<any>,
              private eaf: EntityActionFactory,
              private elRef: ElementRef,
              private entityActionFactory: EntityActionFactory,
              private actuatorCollectionService: ActuatorCollectionService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.actuators$ = this.actuatorCollectionService.entities$
      .pipe(untilViewDestroyed(this.elRef));
    this.loading$ = this.actuatorCollectionService.loading$
      .pipe(untilViewDestroyed(this.elRef));
  }

  onEditClick(actuator: Actuator) {
    const modalRef = this.modalService.open(ModalEditComponent);
    modalRef.componentInstance.actuator = actuator;
    modalRef.result.then(value => {
      this.store.dispatch(this.entityActionFactory.create<Update<Actuator>>(
        'Actuator',
        EntityOp.SAVE_UPDATE_ONE,
        { id: actuator.id, changes: { ...actuator, ...value } })
      );
    });
  }
}
