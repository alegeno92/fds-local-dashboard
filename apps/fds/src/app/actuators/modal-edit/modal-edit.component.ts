import { Component, Input, OnInit } from '@angular/core';
import { FormConfiguration } from '@fds/form';
import { configuration } from './form.configuration';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fds-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {

  configuration: FormConfiguration = configuration;
  @Input() actuator = {};

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  onSaveClick(values) {
    console.log(values);
    this.activeModal.close(values);
  }
}
