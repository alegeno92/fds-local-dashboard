import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { createFormField } from '../utils/form.utils';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormConfiguration } from '@fds/form';

@Component({
  selector: 'fds-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  private _initialValues = {};
  formGroup: FormGroup;
  configurations: FormConfiguration;
  saving = false;

  @Input('initialValues')
  set initialValues(_initialValues) {
    if(_initialValues){
      this._initialValues = _initialValues;
      this.formGroup.patchValue(this._initialValues);
      this.formGroup.markAsPristine();
    }
  }

  @Input('configuration')
  set configuration(config) {
    this.initFormConfiguration(config);
  }

  @Input() loading = false;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  set isSaving(saving) {
    this.saving = saving;
  }

  get values$() {
    return this.formGroup.valueChanges;
  }

  get values() {
    return this.formGroup.value;
  }

  get isValid$(): Observable<boolean> {
    return this.formGroup.statusChanges.pipe(
      map(status => {
        return status === 'VALID' && this.formGroup.dirty;
      })
    );
  }

  private initFormConfiguration(config) {
    this.formGroup = this.generateFormGroup(config);
    this.configurations = config;
    if (this._initialValues) {
      this.formGroup.patchValue(this._initialValues);
      this.formGroup.markAsPristine();
    }
    if (this.configurations.disabled) {
      this.formGroup.disable();
    }
  }

  private generateFormGroup(configurations): FormGroup {
    const form = {};
    configurations.fields
      .filter(field => !!field.name)
      .map(field => {
          const { key, control } = createFormField(field);
          form[key] = control;
        }
      );
    return new FormGroup(form);
  }

  handleSaveClick() {
    this.save.emit(this.formGroup.value);
  }

  isDirty(): boolean {
    return this.formGroup.dirty;
  }

}
