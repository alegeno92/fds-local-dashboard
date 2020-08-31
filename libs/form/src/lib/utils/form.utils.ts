import { FormControl, FormGroup, Validators } from '@angular/forms';

function createFormField(field) {
  let formField;
  if (field.group) {
    const controls = {};
    field.fields
      .forEach(f => {
        controls[f.name] = new FormControl(f.default, composeValidators(f.validators));
        if (f.disabled) {
          controls[f.name].disable();
        }
      });
    formField = {
      key: field.group,
      control: new FormGroup(controls)
    };
  } else {
    const control = new FormControl(field.default, composeValidators(field.validators));
    if (field.disabled) {
      control.disable();
    }

    formField = {
      key: field.name,
      control
    };
  }
  return formField;
}

function composeValidators(validators) {
  return validators.map(v => {
    switch (v.validator) {
      case 'required':
        return Validators.required;
      case 'email':
        return Validators.email;
      case 'minLength':
        return Validators.minLength(v.length);
    }
  });
}

export {createFormField};
