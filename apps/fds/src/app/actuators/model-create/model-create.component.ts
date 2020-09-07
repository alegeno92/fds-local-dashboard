import { Component, OnInit } from '@angular/core';
import { FormConfiguration } from '@fds/form';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { configuration } from './form.configuration';

@Component({
  selector: 'fds-model-create',
  templateUrl: './model-create.component.html',
  styleUrls: ['./model-create.component.css']
})
export class ModelCreateComponent implements OnInit {
  configuration: FormConfiguration = configuration;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

  onSave(values) {
    this.activeModal.close(values);
  }
}
