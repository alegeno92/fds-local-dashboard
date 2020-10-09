import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormConfiguration } from '@fds/form';
import { configuration } from './form.configuration';

@Component({
  selector: 'fds-modal-export',
  templateUrl: './modal-export.component.html',
  styleUrls: ['./modal-export.component.css']
})
export class ModalExportComponent implements OnInit {
  configuration: FormConfiguration = configuration;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

  onExport(values) {
    this.activeModal.close(values);
  }
}
